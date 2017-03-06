angular.module('app').directive('addUserDir', function(){
  return{
    restrict: 'E',
    templateUrl: './views/adduser/addUserDir.html',
    link: function(scope, elem, attr){
      var work = 0;
      var work2 = 0;
      var work3 = 0;

      $('.imgsliderbtn').on('click', function(){
        // work -= 240;

        // if(work >= -900){
        //   $('.imgslider').css({
        //     'transform': 'translate('+ work + 'px)' ,
        //     'transition': '2s'
        //   })
        // }
        if(work === -240){
          work += 240
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else if(work === -480){
          work += 480
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else if(work === -720){
          work += 720
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else{
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
      })
      $('.imgsliderbtn2').on('click', function(){
        if(work === 0){
          work -= 240;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else if(work === -240){
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else if(work === -480){
          work += 240;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else{
          work += 480;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
      })
      $('.imgsliderbtn3').on('click', function(){
        if(work === 0){
          work -= 480;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else if(work === -240){
          work -= 240;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else if(work === -720){
          work += 240;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
      })
      // ------------------------
      $('.imgsliderbtn4').on('click', function(){
        if(work === 0){
          work -= 720;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else if(work === -240){
          work -= 480;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
        else if(work === -480){
          work -= 240;
          $('.imgslider').css({
            'transform': 'translate(' + work + 'px)',
            'transition': '2s'
          })
        }
      })


      $('.imgsliderbtn_1').on('click', function(){
        if(work2 === -240){
          work2 += 240;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
        if(work2 === -480){
          work2 += 480;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
        if(work2 === -720){
          work2 += 720;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
      })

      $('.imgsliderbtn_2').on('click', function(){
        if(work2 === 0){
          work2 -= 240;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
        if(work2 === -480){
          work2 += 240;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
        if(work2 === -720){
          work2 += 480;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
      })
      $('.imgsliderbtn_3').on('click', function(){
        if(work2 === 0){
          work2 -= 480;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
        if(work2 === -240){
          work2 -= 240;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
        if(work2 === -720){
          work2 += 240;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
      })
      $('.imgsliderbtn_4').on('click', function(){
        if(work2 === 0){
          work2 -= 720;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
        if(work2 === -240){
          work2 -= 480;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
        if(work2 === -480){
          work2 -= 240;
          $('.imgslider3').css({
            'transform': 'translate(' + work2 + 'px)',
            'transition': '2s'
          })
        }
      })
      $('.imgsliderbtn__1').on('click', function(){
        if(work3 === -240){
          work3 += 240;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
        if(work3 === -480){
          work3 += 480;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
        if(work3 === -720){
          work3 += 720;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
      })
      $('.imgsliderbtn__2').on('click', function(){
        if(work3 === 0){
          work3 -= 240;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
        if(work3 === -480){
          work3 += 240;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
        if(work3 === -720){
          work3 += 480;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
      })
      $('.imgsliderbtn__3').on('click', function(){
        if(work3 === 0){
          work3 -= 480;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
        if(work3 === -240){
          work3 -= 240;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
        if(work3 === -720){
          work3 += 240;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
      })
      $('.imgsliderbtn__4').on('click', function(){
        if(work3 === 0){
          work3 -= 720;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
        if(work3 === -240){
          work3 -= 480;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
        if(work3 === -480){
          work3 -= 240;
          $('.imgslider2').css({
            'transform': 'translate(' + work3 + 'px)',
            'transition': '2s'
          })
        }
      })
    }

  }
})
