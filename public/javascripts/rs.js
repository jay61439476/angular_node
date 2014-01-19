/**
 * Created by C1008010 on 14-1-12.
 */

var rsAppModule = angular.module('rsApp', []);

rsAppModule.controller('mainCtrl', function($scope){
    $scope.title = "Rs test";
});

rsAppModule.controller('mainDivCtrl', function($http, $scope){
    $scope.opes = [];
    $http.get("/getOpeList", {
        'beginTime': '140117070000',
        'endTime'  : '140117200000'  ,
        'eqptType' : 'AOIH'
    })
    .success(function(data, status, headers, config){
        $scope.opes = data;
    }).error(function(data, status, headers, config){
        console.log("error [%s].", data);
    });

    $scope.getLotsByOpe = function(index){
        $scope.selectedOpe = index;
        console.log("click index %d", index);

        $scope.lots = [];
        $http.get("/getLotsByOpe", {
            ope : $scope.opes[index]
        })
        .success(function(data, status, headers, config){
            $scope.lots = data;
        }).error(function(data, status, headers, config){
            console.log("error [%s].", data);
        });
    };

    $scope.getGlassbyLot = function(index){
        $scope.selectedLot = index;

    };
});