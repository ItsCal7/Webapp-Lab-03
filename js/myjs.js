function popupOpen(x)
{
	document.getElementById('popup'+x).style.display='block';
	document.getElementById('fade').style.display='block';
}

function popupClose(x)
{
	document.getElementById('popup'+x).style.display='none';
	document.getElementById('fade').style.display='none';
}

function showMyCart()
{
	alert("Show Cart");
}
