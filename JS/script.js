function myFunction() {
	var uName = document.getElementById("userName").value;
	var uEmail = document.getElementById("userEmail").value;
	document.getElementById("demo").innerHTML=uName+", thank you for your details. We will be in touch via "+uEmail+" shortly.";
	hide();
}

function hide() {
	document.forms["lab"].addEventListener('submit',function(event){
		this.style.display="none";
		event.preventDefault();
	});
}