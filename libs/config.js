var
consolidate=require('consolidate'),
bodyParser=require('body-parser'), 
morgan=require('morgan'),
express=require('express'),
app=express();


//Midlewares and Settings
module.exports={
	configure:function(express, app){
		app.use(express.static('./assets'));
		app.use(express.static('./app'));
		app.use(bodyParser.json());
		app.use(morgan('dev'));

		app.set('port', 8082);
		app.set('views','./views');
		app.set('view engine','ejs');
		app.engine('html',consolidate.ejs);
	}
};
