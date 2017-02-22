angular.module('app').directive('navDir', function(){
  return {
    restrict: 'E',
    templateUrl: './navbar/navDir.html',
    controller: 'navCtrl'
  }
})
