addtocart = function () {
	var func_id = this.id;
	var find1 = func_id.indexOf("-");
	var index = func_id.substr(find1+1);
	var inhtml = $(".ingredient:eq("+index+")").html();
	var find2 = inhtml.indexOf('<');
	var foodname = inhtml.slice(0,find2);
	var url = "http://www-personal.umich.edu/~bzimm/KInventory/Inventory_ShoppingList/inventory.html?name=" + foodname;
	alert('adding ' + foodname + ' to shopping list');
	window.open(encodeURI(url), '_blank');
}

var ing = document.getElementsByClassName("ingredient");
for(var i = 0; i < ing.length; i++) {
	var name = "ingredient_button-" + i;
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
		var img = document.createElement("IMG");
		img.style.width = "20px";
		img.style.width = "20px";
		img.id = name;
		img.src = chrome.extension.getURL('add_icon.jpeg');	
		img.onclick = addtocart;
		ing.item(i).append(img);
	}
}