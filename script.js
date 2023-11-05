window.addEventListener('scroll', function() {
    var element = document.getElementById('elementToHide');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > 1) { // Change 100 to the number of pixels scrolled down you want
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  });