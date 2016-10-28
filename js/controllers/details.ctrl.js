angular.module('bookStore')

.controller('DetailsCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

    $scope.books_id = $stateParams.itemID;
    console.log($stateParams.itemID);

    $scope.myBook;

    $http({
            method: 'GET',
            url: 'data/data.json'
        })
        .then(function (response) {
            $scope.allData = response.data.books;
            console.log($scope.allData);
            for (var i = 0; i < $scope.allData.length; i++) {


                if ($scope.allData[i]._id == $scope.books_id) {


                    $scope.myBook = $scope.allData[i];
                }

            }

            console.log($scope.myBook);


        }),
        function (response) {

        };

}]);