(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// CONNECT_EXECUTE_MINT.JS //

var number_of_nfts

var contract_address = "0x9902037397c0909b440cBE5EED8e5eb84a2d7BA8";
var number_nfts_sold_g=1000;

const ComingSoon = Symbol("coming_soon")
const Waitlist = Symbol("waitlist")
const Public = Symbol("public")

let project_phase = ComingSoon;


async function execute_mint() {

}

async function setup_nft_count() {


    document.getElementById("nfts_sold_0").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}/1000<br />MAX PER WALLET = ${number_wallet}<br />`;
    document.getElementById("nfts_sold_2").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}/1000<br />MAX PER WALLET = ${number_wallet}<br />`;
    document.getElementById("nfts_sold_4").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}/1000<br />MAX PER WALLET = ${number_wallet}<br />`;
    document.getElementById("nfts_sold_6").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}/1000<br />MAX PER WALLET = ${number_wallet}<br />`;

    document.getElementById("nfts_sold_1").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}<br />DROP DATE = APRIL 2022<br />`;
    document.getElementById("nfts_sold_3").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}<br />DROP DATE = APRIL 2022<br />`;
    document.getElementById("nfts_sold_5").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}<br />DROP DATE = APRIL 2022<br />`;
    document.getElementById("nfts_sold_7").innerHTML = `MINT PRICE = 0.12 ETH<br />QTY NFTS = ${number_nfts_sold_g}<br />DROP DATE = APRIL 2022<br />`;

}


async function connectwallet() {
	$("div.connect_wallet_button").fadeOut(500);

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
	
	alert("Minting available to the public! Max of 2 NFTs per wallet. Please scroll down to mint :)")
	
}

function presale_click(){
	
	alert("If you've confirmed your wallet is on the presale list, Please scroll down to mint :)")
	
}

function comingsoon_click(){
	
	alert("Minting Closed! Join our Discord for project updates :)")
	
}


// ON LOAD (OR OTHER ACTION) QUERY THE CONTRACT TO FIGURE OUT THE TOTAL NUMBER OF NFTS SOLD //

function number_nfts_sold(){
	return "1000" + "/1000";
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
           
},{}]},{},[1])(1)
});
