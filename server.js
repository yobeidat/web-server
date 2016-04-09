var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var PORT = 3000;

app.use(middleware.logger);
app.use(express.static(__dirname+'/public'));
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About us');
});
app.listen(PORT,function(){
	console.log('Express server started on port '+PORT);
});
