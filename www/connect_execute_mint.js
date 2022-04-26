// CONNECT_EXECUTE_MINT.JS //


const { ethers } = require("ethers");


// TODO : this becomes a environment variable
var abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "maxBatchSize_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "collectionSize_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountForDevs_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "allowlist",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "amountForDevs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxPerAddressDuringMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextOwnerToExplicitlySet",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "saleConfig",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "publicSaleStartTime",
        "type": "uint32"
      },
      {
        "internalType": "uint64",
        "name": "mintlistPrice",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "publicPrice",
        "type": "uint64"
      },
      {
        "internalType": "uint32",
        "name": "publicSaleKey",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      }
    ],
    "name": "allowlistMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "callerPublicSaleKey",
        "type": "uint256"
      }
    ],
    "name": "publicSaleMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "publicPriceWei",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "publicSaleKey",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "publicSaleStartTime",
        "type": "uint256"
      }
    ],
    "name": "isPublicSaleOn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "mintlistPriceWei",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "publicPriceWei",
        "type": "uint64"
      },
      {
        "internalType": "uint32",
        "name": "publicSaleStartTime",
        "type": "uint32"
      }
    ],
    "name": "setupSaleInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "key",
        "type": "uint32"
      }
    ],
    "name": "setPublicSaleKey",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "addresses",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "numSlots",
        "type": "uint256[]"
      }
    ],
    "name": "seedAllowlist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      }
    ],
    "name": "devMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
      }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawMoney",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      }
    ],
    "name": "setOwnersExplicit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "numberMinted",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getOwnershipData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "startTimestamp",
            "type": "uint64"
          }
        ],
        "internalType": "struct ERC721A.TokenOwnership",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
var number_of_nfts
// TODO : this becomes a environment variable before mainnet
var contract_address = "0x7d140AA7BE6cc30BD61531c2dd09e55Fe514369F";
var key = 12345;
var number_nfts_sold_g=0;

const ComingSoon = Symbol("coming_soon")
const Waitlist = Symbol("waitlist")
const Public = Symbol("public")

let project_phase = Waitlist;


async function execute_mint() {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contract_address, abi, signer);
        try {
            var mint_value = (number_of_nfts * .12).toString();
            console.log(mint_value);
            console.log(ethers.utils.parseEther(mint_value).toString());
            if (project_phase == Waitlist){
              success = await contract.allowlistMint(number_of_nfts,{value : ethers.utils.parseEther(mint_value).toString()}).then((result) => {
                console.log(result)
                console.log(result["data"]["message"]);
                return true;
              }, (error) => {
                  console.log(error)
                  alert(error["error"]["message"]);
                  return false
              });
            } else if (project_phase == Public) {
            success =  await contract.publicSaleMint(number_of_nfts, key, {value : ethers.utils.parseEther(mint_value).toString()}).then((result) => {
                console.log(result["data"]["message"]);
                return true;
              }, (error) => {
                console.log(error)
                alert(error["error"]["message"]);
                return false
              });
            } else {
              alert("Not minting yet!");
            }
            if(success){
              alert(`Thanks For Helping Ed Get To His Audition!`);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
      alert("Please install MetaMask");
      $("div.connect_wallet_button").fadeIn(2000);
    }
}

async function setup_nft_count() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contract_address, abi, signer);
  success = await contract.totalSupply().then((result) => {
    console.log(result._hex)
    number_nfts_sold_g = parseInt(result._hex,16)
    console.log(number_nfts_sold_g)


    switch (project_phase) {
      case ComingSoon:
      case Waitlist:
        var number_wallet = 1;
        break;
      case Public:
        var number_wallet = 2;
        break;
      default:
      alert("something went wrong");
    }

    document.getElementById("nfts_sold_0").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}/5000<br />MAX PER WALLET = ${number_wallet}<br />`;
    document.getElementById("nfts_sold_2").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}/5000<br />MAX PER WALLET = ${number_wallet}<br />`;
    document.getElementById("nfts_sold_4").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}/5000<br />MAX PER WALLET = ${number_wallet}<br />`;
    document.getElementById("nfts_sold_6").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}/5000<br />MAX PER WALLET = ${number_wallet}<br />`;

    document.getElementById("nfts_sold_1").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}<br />DROP DATE = APRIL 2022<br />`;
    document.getElementById("nfts_sold_3").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}<br />DROP DATE = APRIL 2022<br />`;
    document.getElementById("nfts_sold_5").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}<br />DROP DATE = APRIL 2022<br />`;
    document.getElementById("nfts_sold_7").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}<br />DROP DATE = APRIL 2022<br />`;
    

  })
  //$("div.execute_mint_class").load(" div.execute_mint_class > *");
}


async function connectwallet() {
	$("div.connect_wallet_button").fadeOut(500);
	
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
	    $("div.connect_wallet_button").fadeIn(2000);
    }
  switch (project_phase) {
    case ComingSoon:
      $("div.coming_soon_class").fadeIn(2000);
      $("div.coming_alert_button_class").show;
      $("div.coming_alert_button_class").fadeTo(2000, 1.0);
      break;
    case Waitlist:
      setup_nft_count();
      $("div.execute_mint_class").fadeIn(2000);
      $("div.presale_alert_button_class").show;
      $("div.presale_alert_button_class").fadeTo(2000, 1.0);
      break;
    case Public:
      setup_nft_count();
      $("div.execute_mint_class").fadeIn(2000);
      $("div.public_alert_button_class").show;
      $("div.public_alert_button_class").fadeTo(2000, 1.0);
      break;
    default:
    alert("something went wrong");
  }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
     alert("Please install MetaMask");
	 $("div.connect_wallet_button").fadeIn(2000);
  }
}


	// these open links to new tabs from the front end

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



	// confirms the user has checked the check box

async function validate() {
        if (document.getElementById('termsofmint').checked) {
			number_of_nfts = document.getElementById("quantity_nfts").value;
			execute_mint();
			
        } else {
            alert("Please acknowledge that you agree to our terms of minting by checking the box below.");
        }
    }

async function validate2() {
        if (document.getElementById('termsofmint2').checked) {
			number_of_nfts = document.getElementById("quantity_nfts2").value;
			execute_mint();
			
        } else {
            alert("Please acknowledge that you agree to our terms of minting by checking the box below.");
        }
    }

async function validate3() {
        if (document.getElementById('termsofmint3').checked) {
			number_of_nfts = document.getElementById("quantity_nfts3").value;
			execute_mint();
			
        } else {
            alert("Please acknowledge that you agree to our terms of minting by checking the box below.");
        }
    }

async function validate4() {
        if (document.getElementById('termsofmint4').checked) {
			number_of_nfts = document.getElementById("quantity_nfts4").value;
			execute_mint();
			
        } else {
            alert("Please acknowledge that you agree to our terms of minting by checking the box below.");
        }
    }




// makes the quantity ticker work

function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});






// NEW JS FUNCTIONS FROM DAVE YAY!! //


function publicmint_click(){
	
	alert("Minting available to the public! Max of 3 NFTs per wallet. Please join our Discord for project updates :)")
	
}

function presale_click(){
	
	alert("Currently minting Run Ed for users on the Presale List. Public minting will be availble soon. Please join our Discord for project updates :)")
	
}

function comingsoon_click(){
	
	alert("Presale Mint goes live at the end of April! Join our Discord for project updates :)")
	
}


// ON LOAD (OR OTHER ACTION) QUERY THE CONTRACT TO FIGURE OUT THE TOTAL NUMBER OF NFTS SOLD //

function number_nfts_sold(){
	return number_nfts_sold_g.toString() + "/5000";
}

module.exports = {
art,
publicmint_click,
presale_click,
comingsoon_click,
number_nfts_sold,
perform,
olderelder,
edballoon,
connectwallet,
validate,
validate2,
validate3,
validate4,
execute_mint,
};
           