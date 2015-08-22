'use strict'

var app = require('koa')(),
	router = require('koa-router');


var config = require(__dirname + '/config.js');
var feed = require('./feed.json');
var port = config.koa.port || 3000;

app.use(router(app));

app.get('/lgp/v2/feed', function*(next){
	this.body = JSON.stringify(feed);
	yield next;
});

function startKoa(){
	app.listen(port, function(){
		console.log('server running on port:' + port);
	})
}

startKoa();
