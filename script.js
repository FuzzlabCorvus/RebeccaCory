// JavaScript
var lastScrollTop = 0;
var header = document.querySelector('header');

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down - hide header
    header.classList.add('header-hidden');
  } else {
    // Scrolling up - show header
    header.classList.remove('header-hidden');
  }
  lastScrollTop = scrollTop;
});
