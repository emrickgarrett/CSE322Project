//Saving them as groups of array to make it easier to understand what is going on...
var usernames = new Array();
var passwords = new Array();
var permissions = new Array();

usernames[0] = "garrett";
passwords[0] = "password";
permissions[0] = "1";


var filenames = new Array();
var filePermissions = new Array();

exports.getPermissions = function(username){

	for(var i = 0; i < usernames.length; i++){
		if(usernames[i] == username){
			return permissions[i];
		}
	}

}

exports.login = function(username, password){

	for(var i = 0; i < usernames.length; i++){
		if(usernames[i] == username){
			if(passwords[i] == password){
				return 200;
			}
		}
	}

	return 403; //Forbidden
}

exports.createUser = function(username, password, permission){
	usernames[usernames.length] = username;
	passwords[passwords.length] = password;
	permissions[permissions.length] = permission;
}

exports.getFiles = function(permission){
	var returnFiles = new Array();

	for(var i = 0; i < permissions.length; i++){
		if(filePermissions[i] <= permission){
			returnFiles[returnFiles.length] = filenames[i];
		}
	}

	return returnFiles;
}

exports.addFile = function(filename, permission){
	filenames[filenames.length] = filename;
	filePermissions[filePermissions.length] = permission;
}
