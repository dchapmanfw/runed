const RunEd = artifacts.require("RunEd");
//const Tree = artifacts.require("LoveMyNBAJams")

module.exports = function (deployer) {
  const maxBatchSize = 3;
  const collectionSize = 5555;
  const amountfordevs = 18;
  deployer.deploy(RunEd, maxBatchSize , collectionSize,amountfordevs);
};

// module.exports = function (deployer) {
//   const maxBatchSize = 3;
//   const collectionSize = 10;
//   const amountfordevs = 4;
//   deployer.deploy(Tree, maxBatchSize , collectionSize,amountfordevs);
// };