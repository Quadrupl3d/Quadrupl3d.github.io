// Close the offcanvas when the Font Awesome icon is clicked
$(document).ready(function() {
  $('#closeOffcanvas').click(function() {
  $('.offcanvas').removeClass('show');
  $('.offcanvas-backdrop').remove();
  $('.navbar-toggler').trigger('click');
  });
});


// Persist the red color after focusing.
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
// Add click event listener to each nav-link
navLinks.forEach(navLink => {
navLink.addEventListener('click', function() {
// Remove 'clicked' class from all nav-links
navLinks.forEach(link => link.classList.remove('clicked'));
  // Add 'clicked' class to the clicked nav-link
  this.classList.add('clicked');
  });
});



$(document).ready(function(){
  const currentURL = window.location.href;
  let clicked = null;
  if (currentURL.includes("index")) {
    document.querySelectorAll('.navbar-nav .nav-link')[0].classList.add("clicked");
    document.querySelectorAll('.navbar-nav .nav-item')[0].classList.add("pop-up");
    clicked = document.querySelectorAll('.navbar-nav .nav-item')[0];
  } else if (currentURL.includes('courses')) {
    document.querySelectorAll('.navbar-nav .nav-link')[2].classList.add("clicked");
    document.querySelectorAll('.navbar-nav .nav-item')[2].classList.add("pop-up");
    clicked = document.querySelectorAll('.navbar-nav .nav-item')[2];
  } else if (currentURL.includes('bug-bounty') || currentURL.includes('vuln')) {
    document.querySelectorAll('.navbar-nav .nav-link')[3].classList.add("clicked");
    document.querySelectorAll('.navbar-nav .nav-item')[3].classList.add("pop-up");
    clicked = document.querySelectorAll('.navbar-nav .nav-item')[3];
  } else if (currentURL.includes('services')) {
    document.querySelectorAll('.navbar-nav .nav-link')[4].classList.add("clicked");
    document.querySelectorAll('.navbar-nav .nav-item')[4].classList.add("pop-up");
    clicked = document.querySelectorAll('.navbar-nav .nav-item')[4];
  } else if (currentURL.includes('quadrupl3d-merchandise')) {
    document.querySelectorAll('.navbar-nav .nav-link')[5].classList.add("clicked");
    document.querySelectorAll('.navbar-nav .nav-item')[5].classList.add("pop-up");
    clicked = document.querySelectorAll('.navbar-nav .nav-item')[5];
  }
  const items = document.querySelectorAll('.navbar-nav .nav-item');
  let clickedItem = clicked;
  items.forEach((item) => {
    item.addEventListener('mouseover', () => {
      if (!item.classList.contains('pop-up')) {
        item.classList.add('pop-up');
      }
    });
    item.addEventListener('mouseout', () => {
      if (item !== clickedItem) {
        item.classList.remove('pop-up');
      }
    });
    item.addEventListener('click', () => {
      if (clickedItem === item) {
        return; // Exit the event listener if the same item is clicked again
      }
      if (clickedItem !== null) {
        clickedItem.classList.remove('pop-up');
      }
      clickedItem = item;
    });
  });
})




 