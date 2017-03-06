angular.module('app').directive('bswDir', function(){
  return{
    restrict: 'A',
    link: function(scope, elem, attr){
      var choose = 0;
      if(choose === 0){
        $('.bswImgBtn1').css("background", "#E01E3C");
        $('.bswImgBtn3, .bswImgBtn2').css("background", "white");
      }
      // else if(choose === 1){
      //   $('.bswImgBtn2').css("background", "red");
      //   $('.bswImgBtn1, .bswImgBtn2').css("background", "white");
      // }
      // else if(choose === 2){
      //   $('.bswImgBtn3').css("background", "red");
      //   $('.bswImgBtn1, .bswImgBtn2').css("background", "white");
      // }
      $('.bswFirstRightControlsSpan2').on('click', function(){

        if(choose === 0){
          choose += 1
          $('.bswFirstRightImgsliderImg').hide();
          $('.bswFirstRightImgsliderImg2').fadeIn();
          $('.bswImgBtn2').css("background", "#E01E3C");
          $('.bswImgBtn1, .bswImgBtn3').css("background", "white");
        }
        else if(choose === 1){
          choose += 1
          $('.bswFirstRightImgsliderImg2').hide();
          $('.bswFirstRightImgsliderImg3').fadeIn();
          $('.bswImgBtn3').css("background", "#E01E3C");
          $('.bswImgBtn1, .bswImgBtn2').css("background", "white");
        }
      })
      $('.bswFirstRightControlsSpan1').on('click', function(){
        if(choose === 2){
          choose -= 1;
          $('.bswFirstRightImgsliderImg3').hide();
          $('.bswFirstRightImgsliderImg2').fadeIn();
          $('.bswImgBtn2').css("background", "#E01E3C");
          $('.bswImgBtn1, .bswImgBtn3').css("background", "white");
        }
        else if(choose === 1){
          choose -= 1;
          $('.bswFirstRightImgsliderImg2').hide();
          $('.bswFirstRightImgsliderImg').fadeIn();
          $('.bswImgBtn1').css("background", "#E01E3C");
          $('.bswImgBtn2, .bswImgBtn3').css("background", "white");
        }
      })
      $('.bswImgBtn2').on('click', function(){
        if(choose === 0){
          choose += 1;
          $('.bswFirstRightImgsliderImg').hide();
          $('.bswFirstRightImgsliderImg2').fadeIn();
          $('.bswImgBtn2').css("background", "#E01E3C");
          $('.bswImgBtn1, .bswImgBtn3').css("background", "white");
        }
        if(choose === 2){
          choose -= 1;
          $('.bswFirstRightImgsliderImg3').hide();
          $('.bswFirstRightImgsliderImg2').fadeIn();
          $('.bswImgBtn2').css("background", "#E01E3C");
          $('.bswImgBtn1, .bswImgBtn3').css("background", "white");
        }
      })
      $('.bswImgBtn3').on('click', function(){
        if(choose === 0){
          choose += 2;
          $('.bswFirstRightImgsliderImg3').fadeIn();
          $('.bswFirstRightImgsliderImg').hide();
          $('.bswImgBtn3').css("background", "#E01E3C");
          $('.bswImgBtn1, .bswImgBtn2').css("background", "white");
        }
        if(choose === 1){
          choose += 1;
          $('.bswFirstRightImgsliderImg3').fadeIn();
          $('.bswFirstRightImgsliderImg2').hide();
          $('.bswImgBtn3').css("background", "#E01E3C");
          $('.bswImgBtn1, .bswImgBtn2').css("background", "white");
        }
      })
      $('.bswImgBtn1').on('click', function(){
        if(choose === 1){
          choose -= 1;
          $('.bswFirstRightImgsliderImg').fadeIn();
          $('.bswFirstRightImgsliderImg2').hide();
          $('.bswImgBtn1').css("background", "#E01E3C");
          $('.bswImgBtn3, .bswImgBtn2').css("background", "white");
        }
        if(choose === 2){
          choose -= 2;
          $('.bswFirstRightImgsliderImg').fadeIn();
          $('.bswFirstRightImgsliderImg3').hide();
          $('.bswImgBtn1').css("background", "#E01E3C");
          $('.bswImgBtn3, .bswImgBtn2').css("background", "white");
        }
      })



      $('.f2').on('click', function(){
        $('.bswFirstRightMblack, .bswFirstRightWhite, .bswFirstRightGblack, .bswFirstRightTitanium, .bswFirstRightSky').hide();
        $('.bswFirstRightGold').show();
      })
      $('.f4').on('click', function(){
        $('.bswFirstRightGold, .bswFirstRightWhite, .bswFirstRightGblack, .bswFirstRightTitanium, .bswFirstRightSky').hide();
        $('.bswFirstRightMblack').show();
      })
      $('.f1').on('click', function(){
        $('.bswFirstRightGold, .bswFirstRightWhite, .bswFirstRightMblack, .bswFirstRightTitanium, .bswFirstRightSky').hide();
        $('.bswFirstRightGblack').show();
      })
      $('.f5').on('click', function(){
        $('.bswFirstRightGold, .bswFirstRightMblack, .bswFirstRightGblack, .bswFirstRightTitanium, .bswFirstRightSky').hide();
        $('.bswFirstRightWhite').show();
      })
      $('.f3').on('click', function(){
        $('.bswFirstRightGold, .bswFirstRightWhite, .bswFirstRightGblack, .bswFirstRightMblack, .bswFirstRightSky').hide();
        $('.bswFirstRightTitanium').show();
      })
      $('.f6').on('click', function(){
        $('.bswFirstRightGold, .bswFirstRightWhite, .bswFirstRightGblack, .bswFirstRightTitanium, .bswFirstRightMblack').hide();
        $('.bswFirstRightSky').show();
      })
      $('.expandingDiv1Header, .expandingDiv1X').on('click', function(){
        if($('.expandingDiv2, .expandingDiv1').css('height') === '50px'){
          $('.productOverview').addClass('expand');
        }
        if($('.expandingDiv1').css('height') === '350px' && $('.expandingDiv2').css('height') === '50px'){
          $('.productOverview').removeClass('expand');
        }

        if($('.expandingDiv2').css('height') === '350px'){
          $('.expandingDiv1, .expandingDiv2').toggleClass('expand');
          $('.expandingDiv1Span1, .expandingDiv1Span2').toggleClass('x');
          $('.expandingDiv2Span1, .expandingDiv2Span2').toggleClass('x');
        }
        else{
          $('.expandingDiv1').toggleClass('expand');
          $('.expandingDiv1Span1, .expandingDiv1Span2').toggleClass('x');
        }
      })
      $('.expandingDiv2Header, .expandingDiv2X').on('click', function(){
        if($('.expandingDiv2, .expandingDiv1').css('height') === '50px'){
          $('.productOverview').addClass('expand');
        }
        if($('.expandingDiv2').css('height') === '350px' && $('.expandingDiv1').css('height') === '50px'){
          $('.productOverview').removeClass('expand');
        }

        if($('.expandingDiv1').css('height') === '350px'){
          $('.expandingDiv2, .expandingDiv1').toggleClass('expand');
          $('.expandingDiv2Span1, .expandingDiv2Span2').toggleClass('x');
          $('.expandingDiv1Span1, .expandingDiv1Span2').toggleClass('x');

        }
        else{
          $('.expandingDiv2').toggleClass('expand');
          $('.expandingDiv2Span1, .expandingDiv2Span2').toggleClass('x');
        }
      })
      // $('.productOverviewMobileCrossDiv2').on('click', function(){
      //   $('.productOverviewMobileSpecs').toggleClass('expand');
      //   $('.productOverviewMobileSpecs').toggleClass('expand');
      // })


    }
  }
})
// if($('.bswFirstRightImgsliderImg').css('visibility') == 'visible'){
//   $('.bswFirstRightImgsliderImg').hide();
//   $('.bswFirstRightImgsliderImg2').show();
// }
// if($('.bswFirstRightImgsliderImg2').css('visibility') == 'visible'){
//   $('.bswFirstRightImgsliderImg2').hide();
//   $('.bswFirstRightImgsliderImg3').show();
// }
// if($('.bswFirstRightImgsliderImg2').css('visibility') == 'visible'){
//   $('.bswFirstRightImgsliderImg2').hide();
//   $('.bswFirstRightImgsliderImg3').show();
// }
// if(choose === 0){
//   choose += 1;
//   $('.bswFirstRightImgsliderImg').hide();
//   $('.bswFirstRightImgsliderImg2').show();
// }
// else if(choose === 1){
//   choose += 1;
//   console.log(choose);
//   $('.bswFirstRightImgsliderImg2').hide();
//   $('.bswFirstRightImgsliderImg3').show();
// }

// if(choose === 0){
//   choose += 1;
//   console.log(choose);
//   $('.bswFirstRightImgsliderImg').css("z-index", "0");
//   // var apple = $('.bswFirstRightImgsliderImg').css("z-index", "0");
//   // console.log(apple, 'apple');
//   $('.bswFirstRightImgsliderImg2').css("z-index", "2");
// }
// else if(choose === 1){
//   choose += 1;
//   console.log(choose);
//   $('.bswFirstRightImgsliderImg2').css("z-index", "0");
//   var orange = $('.bswFirstRightImgsliderImg2').css("z-index", "0");
//   console.log(orange, 'orange');
//   $('.bswFirstRightImgsliderImg3').css("z-index", "2");
// }
