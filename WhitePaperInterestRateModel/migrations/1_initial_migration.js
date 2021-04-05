const WhitePaperInterestRateModel = artifacts.require("WhitePaperInterestRateModel");
const BaseRate = 20000000000000000
const Multiplier = 100000000000000000

module.exports = function (deployer) {
  deployer.deploy(WhitePaperInterestRateModel, BaseRate, Multiplier);
};
