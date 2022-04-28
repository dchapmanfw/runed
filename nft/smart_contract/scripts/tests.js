// Dev mint
RunEd.deployed().then(function(instance){return instance.devMint(172);});
// Get Token Count
RunEd.deployed().then(function(instance){return instance.totalSupply();});
// Set Base Token URI
RunEd.deployed().then(function(instance){return instance.setBaseURI('https://runed.mypinata.cloud/ipfs/QmU6tXW8ePoi1boLWJtDhkSbkeir7QVxH32wXh9SdWpCTU');});

var fs = require("fs");
var text = fs.readFileSync("./scripts/test_final.txt");
var textbyline = text.toString('utf-8').split("\r\n")

// Allow List Add
// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(0,500), mint_count.slice(0,500));});
// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(500,1000), mint_count.slice(500,1000));});

// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(1000,1500), mint_count.slice(1000,1500));});
// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(1500,2000), mint_count.slice(1500,2000));});

// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(2000,2500), mint_count.slice(2000,2500));});
// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(2500,3000), mint_count.slice(2500,3000));});

// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(3000,3500), mint_count.slice(3000,3500));});
// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(3500,4000), mint_count.slice(3500,4000));});

// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(4000,4500), mint_count.slice(4000,4500));});
// RunEd.deployed().then(function(instance){return instance.seedAllowlist(textbyline.slice(4500,5000), mint_count.slice(4500,5000));});

// Setup waitlist prices
RunEd.deployed().then(function(instance){return instance.setupSaleInfo(web3.utils.toWei('.12', 'ether'),web3.utils.toWei('.12', 'ether'),0);});



// Test Contract
RunEd.deployed().then(function(instance){return instance.withdrawMoney();});

RunEd.deployed().then(function(instance){return instance.setBaseURI('https://ipfs.io/ipfs/QmazjyJABJFNXftH9eM4wmLqrW47qvsxBxBH24Mykd5mFf');});

LoveMyNFTrees.deployed().then(function(instance){return instance.devMint(3);});
TestNFTRoyal.deployed().then(function(instance){return instance.devMint(3);});
LoveMyNBAJams.deployed().then(function(instance){return instance.setBaseURI('https://ipfs.io/ipfs/QmTHzo8KmRs5eUK4MD22WtX86298tW4j7aL352NKzDKyPu');});
LoveMyNBAJams.deployed().then(function(instance){return instance.setPublicSaleKey(12345);});

let timesalestart = Math.round(Date.now() / 1000);
TestNFTRoyal.deployed().then(function(instance){return instance.setupSaleInfo(web3.utils.toWei('.12', 'ether'),web3.utils.toWei('.12', 'ether'),0);});


TestNFTRoyal.deployed().then(function(instance){return instance.seedAllowlist(wait_list, mint_count);});