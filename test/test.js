const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactoryPath = '../src/ethereum/build/EDeliveryFactory.json';
const compiledDeliveryPath = '../src/ethereum/build/EDelivery.json';
const compiledFactory = require(compiledFactoryPath);
const compiledDelivery = require(compiledDeliveryPath);

let factoryContract;
let deliveryContract;
let deliveryContractAddress;
let accounts; 

const MESSAGE = "Hola, com va tot?";

// To prevent warning "MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 data listeners added. Use emitter.setMaxListeners() to increase limit"
require('events').EventEmitter.defaultMaxListeners = 0;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factoryContract = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode, arguments: [] })
    .send({ from: accounts[0], gas: '6000000' });

  await factoryContract.methods
    .createDelivery([accounts[1],accounts[2]], MESSAGE)
    .send({ from: accounts[0], gas: '6000000', value: '100' });

  const addresses = await factoryContract.methods.getDeliveries().call();
  deliveryContractAddress = addresses[0];

  deliveryContract = await new web3.eth.Contract(JSON.parse(compiledDelivery.interface), deliveryContractAddress);
});

describe('Certified eDelivery Contract', () => {
  it('deploys a factory and a delivery', () => {
    assert.ok(factoryContract.options.address);
    assert.ok(deliveryContract.options.address);
  });

  it("receiver can accept delivery", async function() {
    let message = await deliveryContract.methods.message().call();
    assert.equal(message, MESSAGE);
  });
});
