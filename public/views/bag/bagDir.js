
// ============================================================
angular.module("app").directive('bagDir', function() {
  return {
    restrict: 'A',
    link: function(scope, elem ,attr){
      elem.click(function(){
        $('.stripePaymentForm').slideDown('slow');
      })
      $('.trigger').on('click', function(){
        $(this).addClass('clicked');
        $('.payHere').fadeIn('slow');
        $('.bagItemsInfoPurchaseBtn').fadeOut('fast');
        $('.stripePaymentForm').fadeIn(1100);
        $('.cancelBtn').slideDown();
      })
      $('.cancelBtn').on('click', function(){
        $('.payHere').hide('slow');
        $('.bagItemsInfoPurchaseBtn').fadeIn('fast');
        $('.stripePaymentForm').hide(1100);
        $('.cancelBtn').hide();
        // $('.trigger').removeClass('clicked');
      })
      $('#checkoutMobile').on('click', function(){
        $('.stripePaymentFormMobile').fadeIn();
      })
    }

  };
});
