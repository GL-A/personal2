angular.module('app').directive('homeDir', function(){
  return{
    restrict: 'A',
    link: function(scope, elem , attr){
      $(window).scroll(function(){
        if($(this).scrollTop() > 1500){
          if($(window).width() > 1024){
            $('.beatsEpPremiumMain').slideDown(800);
          }
        }
        else{
          $('.beatsEpPremiumMain').fadeOut(800);
        }

        if($(this).scrollTop() > 400){
          $('.new-beats-products').slideDown(800);
        }else{
          $('.new-beats-products').fadeOut(800);
        }

        if($(this).scrollTop() > 800){
          $('.availableNowBeats').slideDown(800);
        }else{
          $('.availableNowBeats').fadeOut(800);
        }

        if($(this).scrollTop() > 2000){
          if($(this).width() > 1024){
            $('.beatsUltraVioletCollection').slideDown(800);
          }
        }
        else{
          $('.beatsUltraVioletCollection').fadeOut(800);
        }

        if($(this).scrollTop() > 2800){
          if($(this).width() > 1024){
            $('.beatsAlexWangMain').slideDown(800);
          }
        }else{
          $('.beatsAlexWangMain').fadeOut(800);
        }

        if($(this).scrollTop() > 3200){
          if($(this).width() > 1024){
            $('.musicMilesMain').fadeIn(800);
          }
        }else{
          $('.musicMilesMain').fadeOut(800);
        }

        if($(this).scrollTop() > 4000){
          if($(this).width() > 1024){
            $('.beHeardMain').slideDown(800);
          }
        }else{
          $('.beHeardMain').fadeOut(800);
        }

      })

      $(window).resize(function(){

        if($(this).width() < 1024){
          $('.beatsUltraVioletCollection').hide();
        }
        if($(this).width() < 1024){
          $('.musicMilesMain').hide();
        }
        if($(this).width() < 1024){
          $('.beHeardMain').hide();
        }
        if($(this).width() < 1024){
          $('.beatsAlexWangMain').hide();
        }
        if($(this).width() < 1024){
          $('.beatsEpPremiumMain').hide();
        }
      })
      // $(window).scroll(function(){
      //   if($(this).scrollTop() === 1){
      //     $('body').scrollTop(700);
      //   }
      // })
      // $(window).scroll(function(){
      //   if($(this).scrollTop === 1){
      //     $(this).animate({
      //       scrollTop: $(this).offset().top
      //     },2000);
      //   }
      // })


    }
  }
})
