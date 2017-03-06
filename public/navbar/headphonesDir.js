angular.module('app').directive('headphonesDir', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs){
      var element = elem;

      $('#headphones-nav').on('mouseover', function(){
        $(".headphones-dropdown").fadeIn(1000);

      })

      $('.headphones-dropdown-inner').on('mouseleave', function(){
        $(".headphones-dropdown").fadeOut(1000);
      })
      $('.beats-logo-nav, #earphones-nav, #headOut').on('mouseenter', function(){
        $(".headphones-dropdown").fadeOut(1000);
      })
      $('#headphones-nav').hover(function(){
        $('.angle-down2').toggleClass('rotate')
      })
        

        // $('.bars').
        // $('.bars').on('click', function(){
        //   $('.barDropdown').fadeOut(1000);
        // })








//       elem.on({
//     mouseover: function() {
//         $(".headphones-dropdown").fadeIn(1000);
//         $('.headphones-dropdown-inner').mouseover(function(){
//           $('.headphones-dropdown').stop().show();
//         })
//         $('.headphones-dropdown-inner').mouseleave(function(){
//           $(this).stop().fadeOut(1000);
//           $('.headphones-dropdown').stop().fadeOut(1000);
//         })
//     },
//
//     mouseout: function() {
//         $(".headphones-dropdown").fadeOut(1000);
//     }
// })


        // elem.on('mouseover', function(){
        //   $('.headphones-dropdown').fadeToggle(1000);
        // });
        // $('.headphones-dropdown').hover(function(){
        //   $(this).show();
        // })





        // elem.hover(function(){
        //   $('.headphones-dropdown').animate({
        //     "height": "toggle", "opacity": "toggle"
        //   }, "slow");
        // })
    }
  }
})
