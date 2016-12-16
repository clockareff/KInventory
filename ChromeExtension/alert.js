addtocart = function () {
	alert('added item to cart');
	//add integration with database later
}

var ing = document.getElementsByClassName("ingredient");
for(var i = 0; i < ing.length; i++) {
	var name = "ingredient_button" + i;
	var el =  document.getElementById(name);
	if (typeof(el) != 'undefined' && el != null)
	{
	  	if ( el.style.display != 'none' ) {
			el.style.display = 'none';
		}
		else {
			el.style.display = '';
		}
	}
	else {
		console.log("bye");
		var img = document.createElement("IMG");
		img.style.width = "20px";
		img.style.width = "20px";
		img.id = name;
		img.src = chrome.extension.getURL('add_icon.jpeg');
		img.onclick = addtocart;
		ing.item(i).append(img);
	}
}