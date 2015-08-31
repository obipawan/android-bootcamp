'use strict'

var app = require('koa')(),
	router = require('koa-router');


var config = require(__dirname + '/config.js');
var feedv2 = require('./feedv2.json');
var feed = require('./feedv1.1.json');
var feedbefore = require('./feedv1.1before.json');
var feedafter = require('./feedv1.1after.json');
var feedzero = require('./feedempty.json');
var androidConfig = require('./androidconfig.json');
var port = process.env.PORT || config.koa.port || 3000;

app.use(router(app));

app.get('/lgp/v2/feed', function*(next){
	this.body = JSON.stringify(feedv2);
	yield next;
});

app.get('/lgp/v1.1/feed', function*(next){
		if(this.query.before){
			if(this.query.before == '1436459407001'){
				this.body = JSON.stringify(feedbefore);
				yield next;
			}else{
				this.body = JSON.stringify(feedzero);
				yield next;
			}
		}else if(this.query.after){
			console.log('here');
			if(this.query.after == '1436459407020'){
				this.body = JSON.stringify(feedafter);
				yield next;
			}else{
				this.body = JSON.stringify(feedzero);
				yield next;
			}
		}else{
			this.body = JSON.stringify(feed);
			yield next;
		}
});

app.get('/config/android', function*(next){
	this.body = JSON.stringify(androidConfig);
	yield next;
});

function startKoa(){
	app.listen(port, function(){
		console.log('server running on port:' + port);
	})
}

startKoa();