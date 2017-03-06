// CONFIG
// ============================================================
angular.module("app", ["ui.router", "ngAnimate", "angular-stripe"]).config(function($stateProvider, $urlRouterProvider, stripeProvider) {
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
    .state('earphones', {
      url: '/earphones',
      templateUrl: './views/earphones/earphones.html',
      controller: 'earphonesCtrl'
    })
    .state('bag', {
      url: '/bag',
      templateUrl: './views/bag/bag.html',
      controller: 'bagCtrl'
    })
    .state('adduser', {
      url: '/adduser',
      templateUrl: './views/adduser/adduser.html'
    })
    .state('beatsStudioWireless', {
      url: '/BeatsStudioWireless',
      templateUrl: './views/beatsStudioWireless/beatsStudioWireless.html'
    })

  // ASSIGN OTHERWISE
  // ============================================================
  stripeProvider.setPublishableKey('pk_test_vz9nqcqYo583acKH4gEK8gyq');
  $urlRouterProvider.otherwise('/');
});
