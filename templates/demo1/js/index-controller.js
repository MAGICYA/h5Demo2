/**
 * Created by Kelly on 11/9/17.
 */
var nutriunion = angular.module('nutriunion',['ngCookies']);
nutriunion.controller("indexController", ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {

    $scope.JumpFlexFile = function () {
        window.location.href = 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html';
    };
    $scope.JumpBottomButton = function () {
        window.location.href = ROOT_URL+'app/demo1/button-bottom.php?id='+$scope.id;
    };
    $scope.JumpToAngularHtml = function () {
        window.location.href = ROOT_URL+'app/demo1/angularDemo.php';
    };
    $scope.JumpToUIControlsHtml = function () {
        window.location.href = ROOT_URL+'app/demo1/uicontrols.php';
    };
}]);