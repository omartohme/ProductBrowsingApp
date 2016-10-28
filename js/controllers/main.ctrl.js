angular.module('bookStore')

.controller('MainCtrl', ["$scope", "$http", function ($scope, $http) {
    $scope.allData;

    $http({
            method: 'GET',
            url: 'data/data.json'
        })
        .then(function (response) {
            $scope.allData = response.data;
            console.log($scope.allData.categories);
        }, function (response) {

        });
}]);