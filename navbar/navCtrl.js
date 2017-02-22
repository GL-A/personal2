angular.module('app').controller('navCtrl', function($scope, service){
  // $scope.showMenu = function(){
  //   $scope.menuVis = true;
  // };
  // $scope.hideMenu = function(){
  //   $scope.menuVis = false;
  // }

  $scope.changeProductsArr = function(num){
    console.log('changing products', num);
    service.changeProductsArr(num)
  }


})
