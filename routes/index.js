/*
 * GET home page.
 */
var mongodb = require('../models/db');

module.exports = function(app){
    //index
    app.get('/' , function(req, res){
        res.render('index', { title: 'RS' });
    });

    //Ini opt list
    app.get('/getOpeList', function(req, res){
        var beginTime,
            endTime,
            eqptType,
            wdtimes = [];

        beginTime = req.params.beginTime;
        endTime = req.params.endTime;
        eqptType = req.params.eqptType;

        mongodb.open(function (err, db) {
            if (err) {
                console.error(err);
                return err;
            }
            //读取wdtime集合
            db.collection('wdtime', function (err, collection) {
                if (err) {
                    mongodb.close();
                    console.error(err);
                    return err;
                }
                //查找用户名（name键）值为 name 一个文档
                collection.findOne({
                    _id: 'rs_delete_wd'
                }, function (err, wdtimes) {
                    mongodb.close();
                    if (err) {
                        return callback(err);//失败！返回 err 信息
                    }
//                    callback(null, wdtimes);//成功！返回查询的用户信息
                    res.send(wdtimes);
                });
            });
        });

    });

    app.get('/getLotsByOpe', function(req, res){
        var ope = req.params.ope;

        var lotsAry = [
            {"short_lot_id":"68P41051","lot_judge_stat":"COMP","max_date_time":140112093928},
            {"short_lot_id":"50P41078","lot_judge_stat":"COMP","max_date_time":140112070329},
            {"short_lot_id":"71E41001","lot_judge_stat":"COMP","max_date_time":140112073413},
            {"short_lot_id":"42P41065","lot_judge_stat":"COMP","max_date_time":140112124646},
            {"short_lot_id":"42P41064","lot_judge_stat":"COMP","max_date_time":140112130132},
            {"short_lot_id":"35P41001","lot_judge_stat":"COMP","max_date_time":140112134940}
        ];
        console.log('ope is %s', ope);
        res.send(lotsAry);
    });
};

