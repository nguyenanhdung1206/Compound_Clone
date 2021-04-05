const cEther = artifacts.require("cEther");
const Comptroller = '0x53227b5EDDCc3E82Ee05e0875bf1f2c659a02352'
const InterateModel = '0x290Ba6C2aF78E8B29B92D1e2D9142bf1a9263cE5'
const InitialExchangeRate = 200000000000000000000000000
const Name = 'Compound Ether'
const Symbol = 'cETH'
const Decimal = 8

module.exports = function (deployer) {
  deployer.deploy(cEther, Comptroller, InterateModel, InitialExchangeRate, Name, Symbol, Decimal);
};
