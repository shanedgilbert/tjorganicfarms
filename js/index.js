window.onload = function() {
  // JavaScript for scroll to top button
  const scrollToTopButton = document.getElementById('scroll-to-top');
  const scrollToBottomButton = document.getElementById('scroll-to-bottom');

  //Shows up arrow when scroll > 200 px
  const scrollFuncTop = () => {
    // Get the current scroll value
    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 200) {
      scrollToTopButton.className = "scroll-top showArrow";
    } else {
      scrollToTopButton.className = "scroll-top hideArrow";
    }
  };

  //Shows down arrow when scroll <= 200px
  const scrollFuncBot = () => {
    // Get the current scroll value
    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y <= 200) {
      scrollToBottomButton.className = "scroll-bot showArrow";
    } else {
      scrollToBottomButton.className = "scroll-bot hideArrow";
    }
  };
  window.addEventListener("scroll", scrollFuncTop);
  window.addEventListener("scroll", scrollFuncBot);

  //Scroll to top
  $('.scroll-top').click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') )
    }, 0);
     return false;
  });

  //Scroll to below main picture
  $('.scroll-bot').click(function() {
    $('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 0);
     return false;
  });
};
