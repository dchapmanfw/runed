// CONNECT_COMING_SOON.JS //

const { ethers } = require("ethers");



async function connectwallet() {
	
	$("div.connect_wallet_button").fadeOut(500);
	
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
	 $("div.connect_wallet_button").fadeIn(2000);
    }
	$("div.coming_soon_class").fadeIn(2000);
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
	  
  } else {
    
     alert("Please install MetaMask");
	 $("div.connect_wallet_button").fadeIn(2000);
  }
}


// async function execute() {
//  if (typeof window.ethereum !== "undefined") {
//    contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
//    const abi = [
//      {
//        inputs: [
//          {
//            internalType: "string",
//            name: "_name",
//            type: "string",
//          },
//          {
//            internalType: "uint256",
//            name: "_favoriteNumber",
//            type: "uint256",
//          },
//        ],
//        name: "addPerson",
//        outputs: [],
//        stateMutability: "nonpayable",
//        type: "function",
//      },
//      {
//        inputs: [
//          {
//            internalType: "string",
//            name: "",
//            type: "string",
//          },
//        ],
//        name: "nameToFavoriteNumber",
//        outputs: [
//          {
//            internalType: "uint256",
//            name: "",
//            type: "uint256",
//          },
//        ],
//        stateMutability: "view",
//        type: "function",
//      },
//      {
//        inputs: [
//          {
//            internalType: "uint256",
//            name: "",
//            type: "uint256",
//          },
//        ],
//        name: "people",
//        outputs: [
//          {
//            internalType: "uint256",
//            name: "favoriteNumber",
//            type: "uint256",
//          },
//          {
//            internalType: "string",
//            name: "name",
//            type: "string",
//          },
//        ],
//        stateMutability: "view",
//        type: "function",
//      },
//      {
//        inputs: [],
//        name: "retrieve",
//        outputs: [
//          {
//            internalType: "uint256",
//            name: "",
//            type: "uint256",
//          },
//        ],
//        stateMutability: "view",
//        type: "function",
//      },
//      {
//        inputs: [
//          {
//            internalType: "uint256",
//            name: "_favoriteNumber",
//            type: "uint256",
//          },
//        ],
//        name: "store",
//        outputs: [],
//        stateMutability: "nonpayable",
//        type: "function",
//      },
//    ];
//    const provider = new ethers.providers.Web3Provider(window.ethereum);
//    const signer = provider.getSigner();
//    const contract = new ethers.Contract(contractAddress, abi, signer);
//    try {
//      await contract.store(42);
//    } catch (error) {
//      console.log(error);
//    }
//  } else {
//    document.getElementById("executeButton").innerHTML =
//      "Please install MetaMask";
//  }
//}

function art(){
	
	const tab = window.open('https://opensea.io/Ed-Balloon', '_blank');
	
}

function perform(){
	
	const tab = window.open('https://www.youtube.com/watch?v=Zyp1yXyXtnk', '_blank');
	
}

function olderelder(){
	
	const tab = window.open('https://twitter.com/olderelder1', '_blank');
	
}

function edballoon(){
	
	const tab = window.open('https://twitter.com/ed_balloon', '_blank');
	
}

	// connecting user wallet

//function connectwallet(){
//
//	// insert metamask call here
//	
//alert("CONNECT FUNCTION GOES HERE")
//	
//	// move this part of the funciton to the metamask "Sucsessfully Connected" function
//
//$("div.connect_wallet_button").fadeOut(500);
//$("div.coming_soon_class").fadeIn(2000);
//
//	
//}

	// this function hides the execute box and reveals the connect button when the wallet is disconected.

//function disconectwallet(){
//	
//	$("div.coming_soon_class").fadeOut(2000);
//	$("div.connect_wallet_button").fadeIn(2000);
//	
//}

module.exports = {
  art,
  perform,
  olderelder,
  edballoon,
  connectwallet,
};

