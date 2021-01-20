# Ethereum

## Development environment
* [Node.js](https://nodejs.org/)
* [Solidity compiler](https://www.npmjs.com/package/solc)
    * `npm install -g solc`
        * `solcjs`
* [Ganache](https://www.npmjs.com/package/ganache-cli) or old `testrpc`
    * `npm install -g ganache-cli`
        * `ganache-cli <options>`
* [Visual Studio Code](https://code.visualstudio.com/)
    * [Solidity extension](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
    * [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Help
* [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
* [Solidity](https://docs.soliditylang.org/)

## Truffle

Install:
```
npm install -g truffle
truffle version
```
* Initialize new and empty Ethereum project: `truffle init`
* Create contract: `truffle create contract HelloWorld`
* Create migration: `truffle create migration HelloWorld`
* Compile: `truffle compile`

Test:
```
truffle develop
> migrate
> HelloWorld
> let inst
> HelloWorld.deployed().then((instance) => { inst = instance; } );
```
