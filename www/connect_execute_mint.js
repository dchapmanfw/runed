// CONNECT_EXECUTE_MINT.JS //


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
	$("div.execute_mint_class").fadeIn(2000);
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

	// connecting user wallet

//function connectwallet(){
//
//	// insert metamask call here
//	
//alert("CONNECT FUNCTION GOES HERE");
//	
//	// move this part of the funciton to the metamask "Sucsessfully Connected" function
//
//$("div.connect_wallet_button").fadeOut(500);
//$("div.execute_mint_class").fadeIn(2000);
//
//}

	// this function hides the execute box and reveals the connect button when the wallet is disconected.

function disconectwallet(){
	
	$("div.coming_soon_class").fadeOut(2000);
	$("div.connect_wallet_button").fadeIn(2000);
	
}

	// confirms the user has checked the check box

function validate() {
        if (document.getElementById('termsofmint').checked) {
			number_of_nfts = document.getElementById("quantity_nfts").value;
			execute_mint();
			
        } else {
            alert("Please acknowledge that you agree to our terms of minting by checking the box below.");
        }
    }

function validate2() {
        if (document.getElementById('termsofmint2').checked) {
			number_of_nfts = document.getElementById("quantity_nfts2").value;
			execute_mint();
			
        } else {
            alert("Please acknowledge that you agree to our terms of minting by checking the box below.");
        }
    }

function validate3() {
        if (document.getElementById('termsofmint3').checked) {
			number_of_nfts = document.getElementById("quantity_nfts3").value;
			execute_mint();
			
        } else {
            alert("Please acknowledge that you agree to our terms of minting by checking the box below.");
        }
    }

function validate4() {
        if (document.getElementById('termsofmint4').checked) {
			number_of_nfts = document.getElementById("quantity_nfts4").value;
			execute_mint();
			
        } else {
            alert("Please acknowledge that you agree to our terms of minting by checking the box below.");
        }
    }

	// would be cool if var number_of_nfts could be sent back to front end value quantity

var number_of_nfts

function execute_mint(){
	
	// var number_of_nfts = document.getElementById("quantity_nfts").value;

	if (number_of_nfts >0 && number_of_nfts <= 3) {
		
		alert("READY TO MINT " + number_of_nfts + " NFTs MY GUY");
		
	}
	
	else {	
		alert("Please select a number between 1-3. There is a maxium mint quanity of three (3) NFTs per wallet.");
		
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


module.exports = {
art,
perform,
olderelder,
edballoon,
connectwallet,
execute,
validate,
validate2,
validate3,
validate4,
execute_mint,
};
           