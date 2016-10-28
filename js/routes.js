angular.module('bookStore')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/page1');

        $stateProvider
            .state('home', {
                url: '/page1',
                templateUrl: 'templates/page1.html',
                controller: 'MainCtrl'
            })
            .state('books', {
                url: '/page1/:categoryID',
                templateUrl: 'templates/page2.html',
                controller: 'BooksCtrl'
            })
            .state('books.details', {
                url: '/details/:itemID',
                templateUrl: 'templates/details.html',
                controller: 'DetailsCtrl'
            });

}]);