 $(document).ready(function() {
    $('.box').hover(function() {
      $(this).find('.fa-video').removeClass('fa-regular').addClass('fa-solid').css('color', '#ff704d');
    }, function() {
      $(this).find('.fa-video').removeClass('fa-solid').addClass('fa-regular').css('color', '#acacbe');
      
    });
    
  });

  $(document).ready(function() {
    $('.box').hover(function() {
      $(this).find('.fa-sword, .fa-video, .fa-cube, .fa-shield').removeClass('fa-light fa-regular').addClass('fa-solid');
    }, function() {
      $(this).find('.fa-sword, .fa-video, .fa-cube, .fa-shield').removeClass('fa-solid').addClass(function() {
        return $(this).hasClass('fa-sword') ? 'fa-light' : 'fa-regular';
      });
    });
  });

  $(document).ready(function() {
    $('.add-to-cart').hover(function() {
      $(this).find('.fa-cart-plus').css('color', 'white');
    }, function() {
      $(this).find('.fa-cart-plus').css('color', '#acacbe');
    });
  });

  $(document).ready(function() {
    $('.box').hover(function() {
      $(this).find('.offensive').css('color', 'red');
      $(this).find('.defensive').css('color', '#3566bb');
      $(this).find('.red').css('color', 'red');
      $(this).find('.blue').css('color', 'blue');
      $(this).find('.purple').css('color', 'purple');
    }, function() {
      $(this).find('.offensive').css('color', '#acacbe');
      $(this).find('.defensive').css('color', '#acacbe');
      $(this).find('.red').css('color', '#acacbe');
      $(this).find('.blue').css('color', '#acacbe');
      $(this).find('.purple').css('color', '#acacbe');
    });
  });


  window.addEventListener('DOMContentLoaded', (event) => {
    const boxElement = document.querySelector('.box.FUV');
    boxElement.focus();
  
    // Trigger hover effect on page load
    boxElement.classList.add('hovered');
  
    // Remove hover effect and tabindex on hover over other box elements
    const boxElements = document.querySelectorAll('.box');
    boxElements.forEach((element) => {
      element.addEventListener('mouseover', handleBoxMouseover);
    });
  
    function handleBoxMouseover(event) {
      const target = event.target;
      if (target !== boxElement) {
        boxElement.classList.remove('hovered');
        boxElement.removeAttribute('tabindex');
        boxElements.forEach((element) => {
          element.removeEventListener('mouseover', handleBoxMouseover);
        });
      }
    }
  });
