# Ethereum

## Development environment
* [Node.js](https://nodejs.org/)
* [Solidity compiler](https://www.npmjs.com/package/solc)
    * `npm install -g solc`
        * `solcjs`
* [Truffle](https://www.npmjs.com/package/truffle)
    * `npm install -g truffle`
* [Ganache-cli](https://www.npmjs.com/package/ganache-cli) or old `testrpc`
    * `npm install -g ganache-cli`
        * `ganache-cli <options>`
* [Visual Studio Code](https://code.visualstudio.com/)
    * [Solidity extension](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
    * [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
    * [Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets](https://marketplace.visualstudio.com/items?itemName=thekalinga.bootstrap4-vscode)

## Help
* [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
* [Solidity](https://docs.soliditylang.org/)
* [Truffle](https://www.trufflesuite.com/docs/truffle/overview)
* [Ganache](https://www.trufflesuite.com/docs/ganache/overview)
* [Remix](https://remix-ide.readthedocs.io/)

## Links
* [Ethereum.org](https://ethereum.org/en/)
* [Eat the Blocks - Youtube channel](https://www.youtube.com/channel/UCZM8XQjNOyG2ElPpEUtNasA)
* [Eat the Blocks - GitHub repository](https://github.com/jklepatch/eattheblocks)

## Truffle
* Initialize new and empty Ethereum project: `truffle init`
* Create contract: `truffle create contract HelloWorld`
* Create migration: `truffle create migration HelloWorld`
* Compile: `truffle compile`
* Deploy contracts: `truffle migrate`
* Deploy contracts from the beginning (recompiling): `truffle migrate --reset`

### Test
```
truffle develop
> migrate
> HelloWorld
> let inst
> HelloWorld.deployed().then((instance) => { inst = instance; } );
> inst.functionName("test", "parameter", 1);
```

### Unbox
* [Boxes](https://www.trufflesuite.com/boxes)
```
truffle unbox <box>
```

For example:
```
truffle unbox react
truffle develop
> compile
> migrate
cd client/
npm run start
```
To see the example, run [http://localhost:3000/](http://localhost:3000/) from an incognito/private window so no plugin (for example, Metamask) will be loaded and it will use the network crated by truffle.

## Remix - Ethereum IDE
[http://remix.ethereum.org/](http://remix.ethereum.org/)

Install locally:
```
npm install -g remixd
```

* Plugins:
    * Solidity compiler
    * Deploy & run transactions
* Environments:
    * JavaScript VM: sandbox blockchain in the browser
    * Injected Web3: web3 provider like *Metamask*

## Ganache GUI
[Download](https://www.trufflesuite.com/ganache) and install or execute:
```
git clone https://github.com/trufflesuite/ganache
cd ganache/
npm install
npm start
```

Run *truffle*:
```
truffle develop
```

And configure in *Ganache GUI* the server port number of *truffle* (9545) and the *Mnemonic* wordds.

Compile and deploy the smart contract:
```
truffle develop
> compile
> migrate
```
