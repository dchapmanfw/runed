//const RunEd = artifacts.require("RunEd");
const Tree = artifacts.require("TestNFTRoyal")

// module.exports = function (deployer) {
//   const maxBatchSize = 3;
//   const collectionSize = 5555;
//   const amountfordevs = 18;
//   deployer.deploy(RunEd, maxBatchSize , collectionSize,amountfordevs);
// };

module.exports = function (deployer) {
  const maxBatchSize = 3;
  const collectionSize = 20;
  const amountfordevs = 6;
  deployer.deploy(Tree, maxBatchSize , collectionSize,amountfordevs);
};