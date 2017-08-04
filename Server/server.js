//Initiallising node modules
var bodyParser = require('body-parser')
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

// Setting Base directory
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user:  "sa",
    password: "P@ndud31825",
    server: "LT-15-519",
	port: 1433,
	database: 'webshop'
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){	
	sql.connect(dbConfig, function (err) {
		if (err) {   
			console.log("Error while connecting database :- " + err);
			res.send(err);
		}
		else {
			// create Request object
			var request = new sql.Request();
			// query to the database
			request.query(query, function (err, retrievedString) {
				if (err) {
					console.log("Error while querying database :- " + err);
					res.send(err);
				}
				else {
					res.send(retrievedString);
				}
			});
		}
	});	
}

app.get("/api/user", function(req , res){
	var query = "select * from [user]";
	executeQuery (res, query);
});

//POST API
 app.post("/api/user", function(req , res){
    console.log(req.body);
	var query = "INSERT INTO [user] (Name,Email,Password) VALUES ('" + req.body.Name + "','" + req.body.Email + "','" + req.body.Password + "')";
	executeQuery (res, query);
});

//PUT API
 app.post("/api/user/:id", function(req , res){
    console.log(req.body);
	var query = "UPDATE [user] SET Name= '" + req.body.Name  +  "' , Email=  '" + req.body.Email + "'  WHERE UserID= " + req.params.id;
	executeQuery (res, query);
});

// DELETE API
 app.delete("/api/user/:id", function(req , res){
	var query = "DELETE FROM [user] WHERE UserID=" + req.params.id;
	executeQuery (res, query);
});


app.get("/api/items", function(req , res){
	var query = "select * from [items]";
	executeQuery (res, query);
});