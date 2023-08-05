$(document).ready(function() {
    $('.box').hover(function() {
      $(this).find('.fa-icon').removeClass('fa-thin').addClass('fa-solid');
    }, function() {
      $(this).find('.fa-icon').removeClass('fa-solid').addClass('fa-thin');
    });
  });



  // window.addEventListener('DOMContentLoaded', (event) => {
  //   const boxElement = document.querySelector('.box.XXE');
  //   boxElement.focus();
  
  //   // Trigger hover effect on page load
  //   boxElement.classList.add('hovered');
  
  //   // Remove hover effect and tabindex on mousemove event
  //   document.addEventListener('mousemove', handleDocumentMousemove);
  
  //   function handleDocumentMousemove() {
  //     boxElement.classList.remove('hovered');
  //     boxElement.removeAttribute('tabindex');
  //     document.removeEventListener('mousemove', handleDocumentMousemove);
  //   }
  
  //   // Remove hover effect on click
  //   boxElement.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     boxElement.classList.remove('hovered');
  //   });
  // });
  
  
  // window.addEventListener('DOMContentLoaded', (event) => {
  //   const boxElement = document.querySelector('.box.XXE');
  
  //   // Remove tabindex after cursor move
  //   let cursorMoved = false;
  //   document.addEventListener('mousemove', handleDocumentMousemove);
  
  //   function handleDocumentMousemove() {
  //     if (!cursorMoved) {
  //       cursorMoved = true;
  //       boxElement.removeAttribute('tabindex');
  //     }
  //     document.removeEventListener('mousemove', handleDocumentMousemove);
  //   }
  // });
  


 
  window.addEventListener('DOMContentLoaded', (event) => {
    const boxElement = document.querySelector('.box.XXE');
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
  






  





  
  
  



  
  
  
  