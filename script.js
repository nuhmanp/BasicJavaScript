//Submitted by Nuhman Paramban 7262595
//form validation JavaScript function
function validate(){
	//alert("not true");
	var name = document.forms["regForm"]["name"].value;
	var email = document.forms["regForm"]["email"].value;
	var password = document.forms["regForm"]["password"].value;
	var cpassword = document.forms["regForm"]["cpassword"].value;
	var telephone = document.forms["regForm"]["telephone"].value;
	var website = document.forms["regForm"]["website"].value;
	var re = /^[A-Za-z0-9]+@[A-Za-z0-9]+(\.([A-Za-z0-9]+))+$/i;
	var re2 = /^\d{3}\-\d{3}\-\d{4}$/;
	var re3 = /^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
	if(name == null || name == ""){
		alert("Name must be filled out");
		return false;
	}
	else if(email == null || email == ""){
		alert("Email must be filled out");
		return false;
	}
	else if(!re.test(email)){
		alert("You have entered an invalid email address!") ;
		return false;
	}
	else if(password == null || password == ""){
		alert("Password must be filled out");
		return false;
	}
	else if(cpassword == null || cpassword == ""){
		alert("Please fill out confirm password");
		return false;
	}
	else if(password != cpassword){
		alert("Password confirmation doesn't match");
		return false;
	}
	if((telephone != null && telephone != "")&&!re2.test(telephone)){
		alert("Telephone number not in format specified ddd-ddd-dddd") ;
		return false;
	}
	if((website != null && website != "")&&!re3.test(website)){
		alert("Website url not in format specified http://x.y.z") ;
		return false;
	}
}