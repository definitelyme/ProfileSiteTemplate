var express=require('express'), 
consolidate=require('consolidate'),
bodyParser=require('body-parser'),
morgan=require('morgan'),
path=require('path'),
app=express(),
config=require('./libs/config');


//Middlewares and Settings
config.configure(express, app);


//Router
app.get('/',function(req, res){
	res.render('index.html');
});


//Listen
app.listen(app.get('port'),function(){
	console.log('NodeJS Server Running on Port: '+app.get('port'));
});