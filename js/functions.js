
/**************************** GLOBAL VARIABLES ***********************************/
var permissions = 0;
var username = "";
var password = "";

var prevtexthash = {};
prevtexthash["department1"] = '';
prevtexthash["department2"] = '';
prevtexthash["addnewfile"] = '';

var showflags = {};
showflags["department1"] = true;
showflags["department2"] = true;
showflags["addnewfile"] = true;


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

/********************   Show File Structure Script  ******************************/

function showFileStructure(id){
	if(!(id in showflags)){
		
	}else if(showflags[id]){
		showflags[id] = !showflags[id];
		prevtexthash[id] = document.getElementById(id).innerHTML;
		document.getElementById(id).innerHTML += 
		'<br>&nbsp&nbsp&nbsp&nbsp' + 
		//'<input type="button" value="Test File" onclick="showFile('+id+',"./documents/test_document.pdf");">';
		'<a type="application/pdf" href="./documents/test_document.pdf" onclick="hideFileStructure(' + id + ')">Test Document</a><br>';
	}else{
		showflags[id] = !showflags[id];
		document.getElementById(id).innerHTML = prevtexthash[id];
		prevtexthash[id] = '';
	}
}

function showFile(id, filepath){
	if(showflags[id]){
		showflags[id] = !showflags[id];
		prevtexthash[id] = document.getElementById(id).innerHTML;
		document.getElementById(id).innerHTML += 
		'<input type="button" value="Back" onclick="showFile('+id+');"' +
		'<iframe src="' + filepath + '" height="750" width="100%" frameborder="0"></iframe>';
	}else{
		showflags[id] = !showflags[id];
		document.getElementById(id).innerHTML = prevtexthash[id];
		prevtexthash[id] = '';
	}

}

/********************   Show File Structure Script  ******************************/

function showAddFileForm(id){
	if(showflags[id]){
		showflags[id] = !showflags[id];
		prevtexthash[id] = document.getElementById(id).innerHTML;
		document.getElementById(id).innerHTML += 
		'<form>File Name: <input type="text" name="filename"><br>' +
		'File Path: <input type="text" name="filepath"><br>' +
		'<input type="submit" value="Submit" onclick="printFile();">' +
		'</form>';
	}else{
		showflags[id] = !showflags[id];
		document.getElementById(id).innerHTML = prevtexthash[id];
		prevtexthash[id] = '';
	}
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

/********************* Print File Script *****************************/

//Handle Button Clicks
function buttonClick(filename){
	var fileDiv = document.getElementById("files");

	fileDiv.removeChild(document.getElementById(filename));
}


//Print the file onto the website
function printFile(file, filename, permission){
	
	var fileDiv = document.getElementById("files");
		
	if(getPermissions() == null || getPermissions() >= permission){
		fileDiv.innerHTML = fileDiv.innerHTML + "<span id=" + filename + "> > <a href=" + filename + " style=\"color:grey;background:#efefef;text-decoration:none;font-size:20;\" > " + filename + " </a>" + "<button onclick=\"buttonClick('" + filename + "');\" id=\"" + filename + "_button\" > <img src=\"images/delete.png\" width=\"5\" height=\"10\"> </button><br/></span>";
	}else{
		fileDiv.innerHTML = fileDiv.innerHTML + "<span id=" + filename + "> > <a href=" + filename + " style=\"color:grey;background:#efefef;text-decoration:none;font-size:20;\" > " + filename + " </a>" + "<br /></span>";
	}
	
	
}
