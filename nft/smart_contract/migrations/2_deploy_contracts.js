//const RunEd = artifacts.require("RunEd");
const Tree = artifacts.require("LoveMyNFBs")

// module.exports = function (deployer) {
//   const maxBatchSize = 3;
//   const collectionSize = 5001;
//   const amountfordevs = 18;
//   deployer.deploy(RunEd, maxBatchSize , collectionSize,amountfordevs);
// };

module.exports = function (deployer) {
  const maxBatchSize = 3;
  const collectionSize = 50;
  const amountfordevs = 6;
  deployer.deploy(Tree, maxBatchSize , collectionSize,amountfordevs);
};