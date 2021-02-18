import web3 from './web3';

const Delivery = require('./build/EDelivery.json');

export default (address) => {
    return new web3.eth.Contract(
        Delivery.abi,
        address
    );
}