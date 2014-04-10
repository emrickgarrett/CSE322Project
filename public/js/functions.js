
var username;
var password;
var permission;

var files;

//Rudimentary example of how to use the pseudo server to add/get data. Probably will remove nPermission from the service.
function login(nUsername, nPassword, nPermission){

	var method = "post";

	var form = document.createElement("form");
	form.setAttribute("method", method);
	form.setAttribute("action", "cse322-12256.onmodulus.net/login");
	
	var hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "username");
	hiddenField.setAttribute("value", nUsername);
	form.appendChild(hiddenField);

	hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "password");
	hiddenField.setAttribute("value", nPassword);
	form.appendChild(hiddenField);

	hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "permission");
	hiddenField.setAttribute("value", nPermission);
	form.appendChild(hiddenField);
	

	document.body.appendChild(form);
	form.submit();
	document.body.removeChild(form);

	
}

function addFile(filename, permission){

}

function createUser(nUsername, nPassword, nPermission){

}

function getFiles(){

}

function getPermission(nUsername){

}
