// JavaScript Document

// Hamburger menu
var menuIcon = document.querySelector('#hamburgermenu');
var hetMenu = document.querySelector('#menu');
var deNav = document.querySelector('nav')

menuIcon.addEventListener("click", menuLatenZien);

function menuLatenZien () {

	hetMenu.classList.toggle("toonmenu");
	deNav.classList.toggle("toonnavigatie");
}

// Popup 

var kruisIcon = document.querySelector('#popupkruis');
var dePopup = document.querySelector('#popup')
var popupButton = document.querySelector('#openpopup')

kruisIcon.addEventListener("click", popupWegKlikken);

function popupWegKlikken () {
	dePopup.classList.add("wegpopup");
	popupButton.classList.add("toonpopupbutton");
}

popupButton.addEventListener("click", popupWeerOpen);

function popupWeerOpen () {
	dePopup.classList.remove("wegpopup");
	popupButton.classList.remove("toonpopupbutton");
}


// addtobag actief

var button = document.querySelector('.maatbutton');
var addButton = document.querySelector('#addtobag');

button.addEventListener("click", addButtonActief);

function addButtonActief () {
	addButton.classList.add("toevoeginganimatie");
}

// innerHTML

var descriptionKnop = document.querySelector('.toondescription')
var deliveryKnop = document.querySelector('.toondelivery');
var detailsKnop = document.querySelector('.toondetails')

descriptionKnop.addEventListener("click", showDescriptionStukje);
deliveryKnop.addEventListener("click", showDeliveryStukje);
detailsKnop.addEventListener("click", showDetailsStukje);

function showDescriptionStukje () {
	document.getElementById("informatietekst").innerHTML = "Description";
}

function showDeliveryStukje () {
	document.getElementById("informatietekst").innerHTML = "Delivery";
}

function showDetailsStukje () {
	document.getElementById("informatietekst").innerHTML = "Details";
}


