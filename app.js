// PRELOADER ===================================================//
  window.addEventListener('load', function() {

    fadeOut(document.getElementById('preloader'));
  });

  window.addEventListener('load', function() {

    // Hide the preloader when canvas loads
    var preloader = document.getElementById('preloader');
    var canvasElement = document.querySelector('.canvas');

    if (canvasElement) {
        canvasElement.addEventListener('load', function() {
            fadeOut(preloader);
        });
    } else {
        fadeOut(preloader);
    }
  });

  // Function to perform the fade-out effect
  function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            element.style.display = 'none';
        }
    }, 50); // Adjust speed here
  }
// END OF PRELOADER  ===================================================//



// TEXT TITLE MOVE  ===================================================//
document.addEventListener('DOMContentLoaded', function () {
  var textSection = document.querySelector('.text-section');
  var cube = document.querySelector('.cube');

  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 160) {
      textSection.style.marginTop = '-4rem';
      cube.style.marginTop = '-18rem';
    } else {
      textSection.style.marginTop = '4rem';
      cube.style.marginTop = '4rem';
    }
  });
});

// END OF TEXT TITLE MOVE  ===================================================//





// SECTION FADING  ===================================================//
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    var opacity = (scrollPosition > 144 && scrollPosition < 700) ? 1 : 0;

    document.querySelector('.portfolio-wrapper').style.opacity = opacity;
  });

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var minScrollToShow = 288;
    var maxScrollToHide = 388;
    var fadeInSpeed = 5;
    var fadeOutSpeed = 20;
    var opacity = 0;

    if (scrollPosition > minScrollToShow && scrollPosition <= maxScrollToHide) {
      opacity = (scrollPosition - minScrollToShow) / (maxScrollToHide - minScrollToShow);
      opacity *= fadeInSpeed;
    } else if (scrollPosition > maxScrollToHide) {
      opacity = 1 - ((scrollPosition - maxScrollToHide) / fadeOutSpeed);
      opacity = Math.max(0, opacity);
    }

    document.querySelector('#').style.opacity = opacity;
  });
// END OF SECTION FADING  ===================================================//



// PORTFOLIO  ===================================================//
  const slider = document.querySelector('.slider');

  function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length-1]);
  }

  document.addEventListener('click',activate,false);
// END OF PORTFOLIO  ===================================================//



// TITLE AND TEXT  ===================================================//
  gsap.registerPlugin(ScrollTrigger);

  const textElements = gsap.utils.toArray('.text');

  textElements.forEach(text => {
    gsap.to(text, {
      backgroundSize: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        start: 'center 75%',
        end: 'center 10%',
        scrub: true,
      },
    });
  });
// TITLE AND TEXT  ===================================================//




// CANVAS  ===================================================//
  const canvas = document.querySelector(".canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext("2d");
  const frameCount = 214;

  const currentFrame = (index) => `./frames/${(index + 1).toString()}.jpg`;

  const images = [];
  let ball = { frame: 18 };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    console.log(currentFrame(i));
    images.push(img);
  }

  gsap.to(ball, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
      pin: "canvas",
      end: "500%",
    },
    onUpdate: render,
  });

  gsap.fromTo(
    ".ball-text",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 1,

        start: "50%",
        end: "60%",
      },
      onComplete: () => {
        gsap.to(".ball-text", { opacity: 0 });
      },
    }
  );

  images[0].onload = render;

  function render() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
  }



// END OF CANVAS  ===================================================//






// ACCORDIAN  ===================================================//

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 5; i++) { // Adjust the loop limit based on the number of pairs
    // Select all elements matching both selectors
    const imgOverlays = document.querySelectorAll(`.img-overlay${i}, .img-overlay-mobile${i}`);
    const video = document.querySelector(`.vid${i}`);

    imgOverlays.forEach(imgOverlay => {
      imgOverlay.addEventListener("mouseenter", function () {
        imgOverlays.forEach(overlay => {
          overlay.style.opacity = 0;
        });
        video.style.opacity = 1;

        video.currentTime = 0;
        setTimeout(function () {
          video.play();
        }, 1000);
      });

      imgOverlay.addEventListener("mouseleave", function () {
        imgOverlays.forEach(overlay => {
          overlay.style.opacity = 1;
        });
        video.style.opacity = 0;
      });
    });

    video.addEventListener("mouseenter", function () {
      imgOverlays.forEach(overlay => {
        overlay.style.opacity = 0;
      });
      video.style.opacity = 1;
    });

    video.addEventListener("mouseleave", function () {
      imgOverlays.forEach(overlay => {
        overlay.style.opacity = 1;
      });
      video.style.opacity = 0;
      video.currentTime = 0;
    });

    setTimeout(function () {
      video.play();
    }, 1000);
  }
});






document.addEventListener("DOMContentLoaded", function() {
  // Check if the device is a touchscreen
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    const links = document.querySelectorAll('.accordion-slider li a');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // Prevent the default link behavior
        e.preventDefault();
        
        // Get the href attribute
        const href = this.getAttribute('href');
        
        // Delay navigation by 5 seconds
        setTimeout(() => {
          window.location.href = href;
        }, 5000);
      });
    });
  }
});

// END OF ACCORDIAN  ===================================================//





// HEADER TRANSFORM  ===================================================//


document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 90) {

      // Apply styles when scroll position is past 90px

      document.querySelectorAll('.action').forEach(function (element) {
        element.style.padding = '5px 10px';
        element.style.fontSize = '15px';
        element.style.position = 'static';
        element.style.marginLeft = '4.7px';
      });

      document.querySelectorAll('.header').forEach(function (element) {
        element.style.maxWidth = '300px';
        element.style.height = '80px';
        element.style.padding = '2.5rem';
        element.style.borderRadius = '3rem'
        element.style.marginTop = '20px';
      });

    } else {

      document.querySelectorAll('.action').forEach(function (element) {
        element.style.padding = '';
        element.style.fontSize = '';
        element.style.position = 'absolute';
        element.style.marginLeft = '';
      });

      document.querySelectorAll('.header').forEach(function (element) {
        element.style.maxWidth = '100%';
        element.style.height = '';
        element.style.padding = '';
        element.style.borderRadius = ''
        element.style.marginTop = '';
      });

    }

  });
});

document.addEventListener("DOMContentLoaded", function () {
  var lineElements = document.querySelectorAll('.line1, .line2, .line3');
  
  function handleScroll() {
    var scrollPosition = window.scrollY;
    
    lineElements.forEach(function (lineElement) {
      if (scrollPosition > 90) {
        lineElement.style.transition = 'ease-in-out 0.3s';
        lineElement.style.opacity = '1';
      } else {
        lineElement.style.opacity = '';
        lineElement.style.transition = 'ease-in-out 0.3s';
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
  const menuNav = document.querySelector('.menu-nav');

  window.addEventListener("scroll", function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Set the opacity and display properties with a fade transition
    if (scrollPosition > 90) {
      menuNav.style.opacity = '0';
      setTimeout(() => {
        menuNav.style.display = 'none';
      }, 10); // Adjust the delay to match the transition duration
    } else {
      menuNav.style.display = 'flex';
      setTimeout(() => {
        menuNav.style.opacity = '1';
      }, 50); // Adjust the delay to match the transition duration
    }
  });
});


window.addEventListener('scroll', function() {
  const actionElement = document.querySelector('.action');
  const mediaQueryList = matchMedia('(max-width: 500px)');

  if (mediaQueryList.matches) {
    const scrollPosition = window.scrollY;
    const triggerPoint = 90; // Change this if needed

    if (scrollPosition >= triggerPoint) {
      actionElement.style.opacity = 1;
    } else {
      actionElement.style.opacity = 0;
    }
  }
});



// END OF HEADER TRANSFORM  ===================================================//



function OpenSideMenu() {
  window.location.href = 'https://www.google.com';
}














