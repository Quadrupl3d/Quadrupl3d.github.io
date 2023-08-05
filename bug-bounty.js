$(document).ready(function() {
    $('.box').hover(function() {
      $(this).removeClass('box').addClass('box-new');
      $(this).find('.BUG').removeClass('BUG').addClass('NEW-BUG');
    }, function() {
      $(this).removeClass('box-new').addClass('box');
      $(this).find('.NEW-BUG').removeClass('NEW-BUG').addClass('BUG');
    });
  });


  
  









  
  


  
  



  

  

  