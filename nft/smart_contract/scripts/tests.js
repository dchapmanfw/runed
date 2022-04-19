// Dev mint
RunEd.deployed().then(function(instance){return instance.devMint(4);});
// Get Token Count
RunEd.deployed().then(function(instance){return instance.totalSupply();});
// set time

// Test Contract
LoveMyNFBs.deployed().then(function(instance){return instance.withdrawMoney();});

LoveMyNFBs.deployed().then(function(instance){return instance.setBaseURI('https://ipfs.io/ipfs/QmazjyJABJFNXftH9eM4wmLqrW47qvsxBxBH24Mykd5mFf');});

LoveMyNFTrees.deployed().then(function(instance){return instance.devMint(3);});
LoveMyNBAJams.deployed().then(function(instance){return instance.devMint(3);});
LoveMyNBAJams.deployed().then(function(instance){return instance.setBaseURI('https://ipfs.io/ipfs/QmazjyJABJFNXftH9eM4wmLqrW47qvsxBxBH24Mykd5mFf');});
LoveMyNFBs.deployed().then(function(instance){return instance.setPublicSaleKey(12345);});
LoveMyNFBs.deployed().then(function(instance){return instance.setupSaleInfo(web3.utils.toWei('.12', 'ether'),web3.utils.toWei('.12', 'ether'),timesalestart);});