ang.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/assets/javascripts/angular-app/views/index.html',
      controller: 'HomeCtrl'
    }).
    when('/group_dynamics', {
      templateUrl: '/assets/javascripts/angular-app/views/group_dynamics.html',
      controller: 'HomeCtrl'
    }).
    when('/comfort_picks', {
      templateUrl: '/assets/javascripts/angular-app/views/comfort_picks.html',
      controller: 'HomeCtrl'
    }).
    when('/team_compositions', {
      templateUrl: '/assets/javascripts/angular-app/views/team_compositions.html',
      controller: 'HomeCtrl'
    }).
    when('/404', {
      templateUrl: '/404.html'
    }).
    otherwise({
      redirectTo: '/404'
    });
}]);