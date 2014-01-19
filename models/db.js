/**
 * Created by C1008010 on 14-1-16.
 */
var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
//module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), {safe: true});

module.exports = new Db(settings.db, new Server(settings.host, settings.port, {
    auto_reconnect : true
}));
