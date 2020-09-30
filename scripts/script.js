// JavaScript Document

var menuIcon = document.querySelector('#hamburgermenu');
var hetMenu = document.querySelector("#menu");
var wegMenu = document.querySelector("#menu h2")

menuIcon.addEventListener("click", menuLatenZien);

function menuLatenZien () {

	hetMenu.classList.add("toonmenu");

}

wegMenu.addEventListener("click", menuWegKlikken);

function menuWegKlikken () {
	hetMenu.classList.remove
	("toonmenu");
}


