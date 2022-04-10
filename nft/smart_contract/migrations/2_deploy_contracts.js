const RunEd = artifacts.require("RunEd");

module.exports = function (deployer) {
  const maxBatchSize = 2;
  const collectionSize = 200;
  const amountforauction = 0;
  const amountfordevs = 20;
  deployer.deploy(RunEd, maxBatchSize , collectionSize,amountforauction,amountfordevs);
};