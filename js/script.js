$(document).ready(function(){
  
    $('#open-menu').click(function(){
         $("#all-sous-menu").css('left','0px');
    })
    $('#close-menu').click(function(){
        $("#all-sous-menu").css('transition','all 500ms ease-in-out')
        $("#all-sous-menu").css('left','-80%');
   })
})