angular.module('app').controller('bagCtrl', function($scope, service, stripe, $http, $state){

  $scope.purchaseDone = function(){
    swal("Purchase Confirmed!!",
    "Please continue shopping!",
    "success"
  )

$state.go('home');
  }
//   $scope.purchaseDone = function(){
//     swal({
//   title: "Sweet!",
//   text: "Thank you for shopping at apple. Click continue shopping",
//   imageUrl: "https://img.clipartfox.com/7f052061fdc557ec0763377978761789_thumbs-up-smiley-face-clipart-smiley-face-thumbs-up_509-336.jpeg"
// }, function(){
//  $state.go('home');
// })
//
//   }
  service.getCartProducts().then(function(res){
    console.log(res);
    $scope.cartProducts = res;
    // var total = [];
    // for(var x = 0; x < res.length; x++){
    //   total.push(parseInt(res[x].price) * res[x].qty);
    // }
    // $scope.total = total;
    // console.log($scope.total);
    // $scope.total = parseInt(res.price) * parseInt(res.qty);
    for(var x = 0; x < res.length; x++){
      res[x].total = parseInt(res[x].price) * res[x].qty;
    }
    var orderTotal = 0;
    for(var x = 0; x < res.length; x++){
      orderTotal += res[x].total;
    }
    $scope.orderTotal = orderTotal;
  })

  $scope.removeFromCart = function(product){

    swal({
  title: "Are you sure?",
  text: "All discounts and promotions will be lost!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel plx!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
    swal("Deleted!", "Your imaginary file has been deleted.", "success");
    service.removeFromCart(product);
    $state.reload();
  } else {
    swal("Cancelled", "Your imaginary file is safe :)", "error");
  }
});
  }
  $scope.payment = $scope.orderTotal;

  $scope.charge = function(){
    return stripe.card.createToken($scope.payment.card).then(function(response){
      console.log('token createed for card ending in ', response.card.last4);
      var payment = angular.copy($scope.payment);
      payment.card = void 0;
      payment.token = response.id;

      return $http({
        method: 'POST',
        url: '/api/payment',
        data: {
          amount: $scope.orderTotal,
          payment: payment
        }
      })
    })
    .then(function(payment){
      console.log('succefully submitted payment for $', payment);
      // alert('congrats your payment was accepted');
      return payment
    })

    .catch(function(err){
      if(err.type && /^Stripe/.test(err.type)){
        console.log('Stripe error: ', err.message);
        // alert(err.message);
      }
      else{
        console.log('Other error occured, possibly with your API', err.message);
        // alert(err.message);
      }
    });
  };



})
