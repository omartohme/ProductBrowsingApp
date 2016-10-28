angular.module('bookStore')

.controller('BooksCtrl', ["$scope", "$http", "$stateParams", function ($scope, $http, $stateParams) {
    $scope.allData;
    console.log($stateParams.categoryID);
    var cat = $stateParams.categoryID;
    $scope.books = [];

    $http({
            method: 'GET',
            url: 'data/data.json'
        })
        .then(function (response) {
            $scope.allData = response.data.books;
            console.log($scope.allData);
            for (var i = 0; i < $scope.allData.length; i++) {


                if ($scope.allData[i].cat_id == cat) {


                    $scope.books.push($scope.allData[i]);
                }

            }

            console.log($scope.books);


        }),
        function (response) {

        };
}]);