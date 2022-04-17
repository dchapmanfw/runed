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
	$("div.coming_alert_button_class").show;
	$("div.coming_alert_button_class").fadeTo(2000, 1.0)
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
	  
  } else {
    
     alert("Please install MetaMask");
	 $("div.connect_wallet_button").fadeIn(2000);
  }
}


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


function comingsoon_click(){
	
	alert("Presale Mint goes live at the end of April! Join our Discord for project updates :)")
	
}


function number_nfts_sold(){
	
	var mint_value=0;
	return mint_value.toString() + "/5000";
	
}



module.exports = {
  comingsoon_click,
  number_nfts_sold,
  art,
  perform,
  olderelder,
  edballoon,
  connectwallet,
};

