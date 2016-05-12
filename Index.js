var express = require('express');
var app = express();
var assert = require('assert');
var mongoose = require('mongoose');

app.listen(3000,function(err){
	if(err)
		console.log(err);
});

