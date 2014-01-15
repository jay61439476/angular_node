/**
 * Created by C1008010 on 14-1-12.
 */

var rsAppModule = angular.module('rsApp', []);

rsAppModule.controller('mainCtrl', function($scope){
    $scope.title = "Rs test";
});

rsAppModule.controller('mainDivCtrl', function($http, $scope){
//    $.post("http://localhost:8070/getOpeList.json",{
//        'beginTime': '140112070000',
//        'endTime'  : '140113135835'  ,
//        'eqptType' : 'AOIH'
//    }, function(data) {
//        alert(data);
//    }, 'json');

//    $http.post("http://localhost:8070/getOpeList.json",{
//        beginTime : "140112070000",
//        endTime : "140113135835",
//        eqptType : "AOIH"
//    })
//    .success(function(data, status, headers, config){
//        alert(data);
//    }).error(function(data, status, headers, config){
//        alert("error");
//    });

    $scope.opes = ['0', '1', '2', '3'];

    $scope.lotsAry = [
        {"short_lot_id":"68P41051","lot_judge_stat":"COMP","max_date_time":140112093928},
        {"short_lot_id":"50P41078","lot_judge_stat":"COMP","max_date_time":140112070329},
        {"short_lot_id":"71E41001","lot_judge_stat":"COMP","max_date_time":140112073413},
        {"short_lot_id":"42P41065","lot_judge_stat":"COMP","max_date_time":140112124646},
        {"short_lot_id":"42P41064","lot_judge_stat":"COMP","max_date_time":140112130132},
        {"short_lot_id":"35P41001","lot_judge_stat":"COMP","max_date_time":140112134940}
    ];

    $scope.getLotByOpe = function( index ){
        console.log("click index %d", index);
        $scope.lots = [];
        $scope.lots.push($scope.lotsAry[index]);
        console.log($scope.lots);
    };
});