angular.module('app').controller('headphonesCtrl', function($scope, service){


  // $scope.getHeadphones = function(){
  //
  //   $scope.headphones = service.getHeadphones();
  //   console.log($scope.headphones);
  // }

  $scope.products = service.products;
  console.log($scope.products);
  $scope.backgroundImage = {

    "background-image": "url(" + $scope.products[0].mainImg + ")",
    "background-repeat": "no-repeat",
    "background-position": "center center",
    "background-size": "cover",
    "height": "74vh",
    "margin-bottom": "115px"
  }
  $scope.header = service.products[0].type;
  console.log($scope.header);

  // $scope.productHeight = {
  //   "height": $scope.products[0].height,
  //   margin: "0 auto",
  //   "background": "white",
  //   "width": "86%",
  //   "margin-bottom": "20px"
  // }


  console.log($scope.backgroundImage);
  console.log(service.product);




  // $scope.getHeadphones();
})
