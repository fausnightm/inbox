const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'fatigue they quarter prepare scan uphold teach hawk spray pumpkin seek have',
    'https://rinkeby.infura.io/v3/d53e42131e3f45e4ac20c4dfeabdf3d1'
);

const web3 = new Web3(provider);

