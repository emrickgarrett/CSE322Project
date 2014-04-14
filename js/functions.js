
/**************************** GLOBAL VARIABLES ***********************************/
var permissions = 0;
var username = "";
var password = "";

function setPermissions(input){
	permissions = input
}

function getPermissions(){
	return permissions;
}

function setUsername(input){
	username = input;
}

function getUsername(){
	return username;
}

function setPassword(input){
	password = input;
}

function getPassword(){
	return password;
}


/********************   Login Script  ******************************/

var usernames = new Array();
var passwords = new Array();
var permissions = new Array();

usernames[0] = "clerk"; passwords[0] = "test"; permissions[0] = 4; // Admin privelages.
usernames[1] = "dep_manager"; passwords[1] = "test"; permissions[1] = 3; //Dep manager privelages
usernames[2] = "dep_member"; passwords[2] = "test"; permissions[2] = 2; //Dep member privelages
usernames[3] = "citizen"; passwords[3] = "test"; permissions[3] = 1;		//Citizen privelages.


function login(username, password){
	for(var i = 0; i < 4; i++){
		if(usernames[i] == username){
			if(passwords[i] == password){
				setPermissions(permissions[i]);
			}else{
				alert("Wrong password/username combination");
			}
		}
	}
}
