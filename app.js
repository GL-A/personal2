// CONFIG
// ============================================================
angular.module("app", ["ui.router", "ngAnimate"]).config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/',
      templateUrl: './views/home/home.html'

    })
    .state('headphones', {
      url: '/headphones',
      templateUrl: './views/headphones/headphones.html',
      controller: 'headphonesCtrl'
    })
    .state('bag', {
      url: '/bag',
      templateUrl: './views/bag/bag.html'
    })

  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/');
});
