angular.module('app').directive('earphonesDir', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs){
      var element = elem;

      $('#earphones-nav').on('mouseover', function(){
        $(".earphones-dropdown").fadeIn(1000);
      })
      $('.earphones-dropdown-inner').on('mouseleave', function(){
        $(".earphones-dropdown").fadeOut(1000);
      })
      $('#headphones-nav, #1, #headOut,  .mainNavItem1').on('mouseenter', function(){
        $(".earphones-dropdown").fadeOut(1000);
      })
      $('#earphones-nav').hover(function(){
        $('.angle-down').toggleClass('rotate')
      })

    }
  }
})
