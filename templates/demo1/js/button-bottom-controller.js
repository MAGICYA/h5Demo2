/**
 * Created by Kelly on 11/9/17.
 */
var nutriunion = angular.module('nutriunion',['ngCookies']);
nutriunion.controller("buttonBottomController", ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {
    // $scope.shopCode = nutri.getQueryString("shopCode");
    // $scope.slideIndex = 0;

    $scope.JumpFlexFile = function () {
        window.location.href = 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html';
    };
    $scope.JumpBottomButton = function () {
        window.location.href = 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html';
    };
}]);