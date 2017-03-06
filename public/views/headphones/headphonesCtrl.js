angular.module('app').controller('headphonesCtrl', function($scope, service){

  service.getHeadphones().then(function(res){

      for(var x = 0; x < res.length; x++){
        res[x].features = res[x].features.split('^');

      }
      console.log(res);
      $scope.getHeadphones = res;
    console.log($scope.getHeadphones, 'im here');
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





  // $scope.getHeadphones = function(){
  //
  //   $scope.headphones = service.getHeadphones();
  //   console.log($scope.headphones);
  // }

  // $scope.products = service.products;
  // console.log($scope.products);
  // $scope.backgroundImage = {
  //
  //   "background-image": "url(" + $scope.products[0].mainImg + ")",
  //   "background-repeat": "no-repeat",
  //   "background-position": "center center",
  //   "background-size": "cover",
  //   "height": "74vh",
  //   "margin-bottom": "115px"
  // }
  // $scope.header = service.products[0].type;
  // console.log($scope.header);

  // $scope.productHeight = {
  //   "height": $scope.products[0].height,
  //   margin: "0 auto",
  //   "background": "white",
  //   "width": "86%",
  //   "margin-bottom": "20px"
  // }


  // console.log($scope.backgroundImage);
  // console.log(service.product);




  // $scope.getHeadphones();
})
