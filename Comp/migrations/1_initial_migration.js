const Comp = artifacts.require("Comp");
const Address = '0x0F4a4B8263B4625Ffd5805e7375542E814d32bA3'

module.exports = function (deployer) {
  deployer.deploy(Comp, Address);
};
