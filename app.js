var express = require('express');
var app = express();

//Create a static file server
app.configure(function() {
  app.use(express.static(__dirname + '/public'));
  app.use(express.json());
  app.use(express.urlencoded());
});

var database = require('./database');

app.post("/login", function(req, res){

var username = req.body['username'];
var password = req.body['password'];

res.send(login(username, password));

});

app.post("/createUser", function(req, res){

var username = req.body['username'];
var password = req.password['password'];
var permission = req.permission['permission'];

console.log("USER: " + username + " " +  password + " " +  permission);
createUser(username, password, permission);

res.send(200);

});

app.get("/getFiles", function(req, res){

res.send(getFiles());

});

app.post("/addFile", function(req, res){

var fileName = req.body['filename'];
var permission = req.body['permisson'];

addFile(fileName, permission);

res.send(200);

});

app.get("/getPermission", function(req, res){

var username = req.body['username'];

res.send(getPermission(username));

});


function login(username, password){
	//do stuff
	return database.login(username, password);
}

function getPermission(username){
	return database.getPermissions(username);
}

function createUser(username, password, permission){
	//do stuff
}

function getFiles(){
	//do stuff
}

function addFile(filename, permission){
	//do stuff
}


//Get the dummy data
//require('./server/ddata.js');

var port = 8080;
app.listen(port);
console.log('Express server started on port %s', port);