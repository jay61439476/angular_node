
/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var MongoStore = require('connect-mongo')(express);
var settings = require('./settings');
var flash = require('connect-flash');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3001);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(express.favicon());
    app.use(express.logger('dev')); //onnect 内建的中间件，在开发环境下使用，在终端显示简单的日志

    //connect 内建的中间件，用来解析请求体，
    // 支持 application/json， application/x-www-form-urlencoded,
    // 和 multipart/form-data
    //app.use(express.bodyParser());

    //最新的 Express 生成的工程删除了 app.use(express.bodyParser()),//
    // 使用了：app.use(express.json()); app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());  //connect 内建的中间件，可以协助处理 POST 请求，伪装 PUT、DELETE 和其他 HTTP 方法

    app.use(express.cookieParser());
//    app.use(express.session({
//        secret: settings.cookie_secret,
//        key: settings.db,//cookie name
//        cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
//        store: new MongoStore({
//            db : settings.db,
//            port : settings.port
//        })
//    }));

    app.use(app.router);    //调用路由解析的规则
    app.use(express.static(__dirname + '/public')); //connect 内建的中间件，设置根目录下的 public 文件夹为存放 image、css、js 等静态文件的目录。
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

routes(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});