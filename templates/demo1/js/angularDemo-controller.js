/**
 * Created by Kelly on 11/9/17.
 */
var nutriunion = angular.module('nutriunion',['ngCookies']);
nutriunion.controller("angularDemoController", ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {

    $scope.records = [
            "幼儿园",
            "小学",
            "初中",
            "高中",
        ]
}]);