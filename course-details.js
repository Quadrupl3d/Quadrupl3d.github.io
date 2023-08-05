$(document).ready(function() {
    var selectedStar = 0;
    $('.STAR').click(function() {
      var starValue = $(this).index() + 1;
      selectedStar = starValue;
      var url = "https://example.com?star=" + selectedStar;   
      $('<a>').attr('href', url)[0].click();
    });
    $('.STAR').hover(function() {
      var $stars = $(this).prevAll('.fa-regular').addBack();
      $stars.removeClass('fa-regular').addClass('fa-solid');
    }, function() {
      var $stars = $(this).prevAll('.fa-solid').addBack();
      $stars.removeClass('fa-solid').addClass('fa-regular');
    });
  });


  $(document).ready(function() {
    $('.PREVIEW').hover(function() {
      $(this).removeClass('fa-regular').addClass('fa-solid');
    }, function() {
      $(this).removeClass('fa-solid').addClass('fa-regular');
    });
  });

const heading1Element = document.querySelector('.heading1');
const heading2Element = document.querySelector('.heading2');
const heading3Element = document.querySelector('.heading3');
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      const targetId = entry.target.id;
      const correspondingNavLink = document.querySelector(`a[href="#${targetId}"]`);
      if (correspondingNavLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
          if (link !== correspondingNavLink) {
            link.classList.remove('active');
          }
        });
        correspondingNavLink.classList.add('active');
      }
    }
  });
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

const observer = new IntersectionObserver(callback, options);
observer.observe(heading1Element);
observer.observe(heading2Element);
observer.observe(heading3Element);


const descriptionSection = document.getElementById('scrollspyHeading1');
const navbar1 = document.getElementById('navbar-example2');

window.addEventListener('scroll', () => {
  const descriptionSectionRect = descriptionSection.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= descriptionSectionRect.bottom) {
    navbar1.classList.add('fixed-top');
  } else {
    navbar1.classList.remove('fixed-top');
  }
});




$(document).ready(function() {
  var descriptionElement = $('a[href="#scrollspyHeading1"]');

  // Add the 'hover-effect' class to the "Description" element on page load
  descriptionElement.addClass('hover-effect');



  // Remove the 'hover-effect' class when hovering over other items in the navbar
  $('.HOVER1').not('a[href="#scrollspyHeading1"]').hover(function() {
    $('a[href="#scrollspyHeading1"]').removeClass('hover-effect');
  });

  // Remove the 'hover-effect' class permanently from the "Description" element
  $('a[href="#scrollspyHeading1"]').hover(function() {
    $(this).off('mouseenter mouseleave').removeClass('hover-effect');
  });

  // Scroll event listener
  $(window).scroll(function() {
    descriptionElement.removeClass('hover-effect');
  });

  // Hover event listener
  $('.HOVER1').not(descriptionElement).hover(function() {
    descriptionElement.removeClass('hover-effect');
  }, function() {
    descriptionElement.addClass('hover-effect');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('header');
  var navbar = document.getElementById('navbar');
  var lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user is scrolling down
    if (st > lastScrollTop && st > header.offsetHeight) {
      // Hide the header and navbar
      header.classList.remove('show', 'transition');
      navbar.classList.remove('show', 'transition');
      header.classList.add('hide', 'transition');
      navbar.classList.add('hide', 'transition');
    } else {
      // Show the header and navbar
      header.classList.remove('hide', 'transition');
      navbar.classList.remove('hide', 'transition');
      header.classList.add('show', 'transition');
      navbar.classList.add('show', 'transition');
    }

    lastScrollTop = st;
  });
});







