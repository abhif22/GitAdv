var express = require('express');
var mongodb = require('mongodb').MongoClient;
var app = express();

mongodb.connect('mongodb//localhost:271017/dishes',function(err,db){
	if(err)
		console.log(err);
});

app.listen(3000,function(err){
	if(err)
		console.log(err);
});