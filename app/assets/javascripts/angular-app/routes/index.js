ang.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/ang-views/index.html',
      controller: 'HomeCtrl'
    }).
    when('/group_dynamics', {
      templateUrl: '/ang-views/group_dynamics.html',
      controller: 'HomeCtrl'
    }).
    when('/comfort_picks', {
      templateUrl: '/ang-views/comfort_picks.html',
      controller: 'HomeCtrl'
    }).
    when('/team_compositions', {
      templateUrl: '/ang-views/team_compositions.html',
      controller: 'HomeCtrl'
    }).
    when('/404', {
      templateUrl: '/404.html'
    }).
    otherwise({
      redirectTo: '/404'
    });
}]);