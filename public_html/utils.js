/* add text 'Made by PCSS' to page body */
/* this is a function because we do this on many pages */
var addAuthor = function() {
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	p1.textContent = "Made by";
	p2.textContent = "PCSS";
	
	var div = document.createElement("div");
	div.appendChild(p1);
	div.appendChild(p2);
	div.setAttribute("class", "inkerFont author");

	$('body').append(div);
};

/* display previously chosen age on page */	
/* this is a function because we do this on many pages */
var addAge = function() {
	var div = document.createElement("div");
	div.textContent = config[sessionStorage.getItem("age")].ageRange;
	div.setAttribute("class", "inkerFont chosenAge");

	$('body').append(div);
};
