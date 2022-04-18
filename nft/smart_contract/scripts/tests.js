// Dev mint
RunEd.deployed().then(function(instance){return instance.devMint(4);});
// Get Token Count
RunEd.deployed().then(function(instance){return instance.totalSupply();});
// set time

// Test Contract
LoveMyNFBs.deployed().then(function(instance){return instance.withdrawMoney();});

LoveMyNFBs.deployed().then(function(instance){return instance.setBaseURI('https://ipfs.io/ipfs/QmUFMMxwFX5JEopB1TDWJqbo61LBBzMdgiEyiDspavV8Q7');});

LoveMyNFTrees.deployed().then(function(instance){return instance.devMint(3);});


LoveMyNFBs.deployed().then(function(instance){return instance.setPublicSaleKey(12345);});
LoveMyNFBs.deployed().then(function(instance){return instance.setupSaleInfo(web3.utils.toWei('.12', 'ether'),web3.utils.toWei('.12', 'ether'),timesalestart);});