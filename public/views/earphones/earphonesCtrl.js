angular.module('app').controller('earphonesCtrl', function($scope, service){
  service.getEarphones().then(function(res){

      for(var x = 0; x < res.length; x++){
        res[x].features = res[x].features.split('^');

      }
      $scope.getEarphones = res;
      console.log($scope.getEarphones, 'object');

      // $scope.cart = function(productid){
      //   console.log(productid);
      // }
  })
  $scope.addToCart = function(product){
    service.addToCart(product);
    swal({
  title: "Nice Choice!!",
  text: "Item Added To Bag!!",
  imageUrl: "http://www.clipartbest.com/cliparts/yio/4K9/yio4K9xyT.jpeg",
  timer: 2000,
  showConfirmButton: false
});
  }

})
