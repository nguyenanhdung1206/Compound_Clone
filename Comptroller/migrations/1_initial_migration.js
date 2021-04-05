const Comptroller = artifacts.require("Comptroller");
const COMPAddress = '0x7d60b37AdE79D9eEDC13Fa31e4c16850196DC423'

module.exports = function (deployer) {
  deployer.deploy(Comptroller, COMPAddress);
};
