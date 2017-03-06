angular.module('app').directive('navDir', function(){
  return {
    restrict: 'E',
    templateUrl: './navbar/navDir.html',
    controller: 'navCtrl',
    link: function(scope, elem, attr){
      $('#burger-container').on('click', function(){
        $(this).toggleClass('open');
      })
      $('.bars1').click(function(){
        $('.barDropdown').fadeToggle();
      })
      $('.barDropdowndiv1, .barDropdowndiv').on('mouseenter', function(){
        $(this).css('background', 'rgba(0, 0, 0, 9)');
      })
      $('.barDropdowndiv1, .barDropdowndiv').on('mouseleave', function(){
        $(this).css('background', 'rgba(0, 0, 0, 0)');
      })
      $('.bars2').on('click', function(){
        $('#sd').fadeToggle();
      })
      $('.serena-nav-imgDiv').on('mouseenter', function(){
        $('.serena-nav-imgFade').fadeIn('fast');
      })
      $('.serena-nav-imgDiv').on('mouseleave', function(){
        $('.serena-nav-imgFade').fadeOut('fast');
      })
    }
  }
})
