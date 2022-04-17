const RunEd = artifacts.require("RunEd");
//const RunEd = artifacts.require("LoveMyNFBs")

module.exports = function (deployer) {
  const maxBatchSize = 3;
  const collectionSize = 5001;
  const amountfordevs = 18;
  deployer.deploy(RunEd, maxBatchSize , collectionSize,amountfordevs);
};