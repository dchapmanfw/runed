const RunEd = artifacts.require("RunEd");
//const Tree = artifacts.require("TestNFTRoyal")

module.exports = function (deployer) {
  const maxBatchSize = 2;
  const collectionSize = 5000;
  const amountfordevs = 172;
  deployer.deploy(RunEd, maxBatchSize , collectionSize,amountfordevs);
};

// module.exports = function (deployer) {
//   const maxBatchSize = 2;
//   const collectionSize = 5000;
//   const amountfordevs = 172;
//   deployer.deploy(Tree, maxBatchSize , collectionSize,amountfordevs);
// };