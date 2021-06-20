const body = $('body');
// call this to Disable
function disableScroll() {
  // window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  // window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  // window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  // window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  // console.log('desabled');
  body.addClass('no-scroll');
}

// call this to Enable
function enableScroll() {
  // window.removeEventListener('DOMMouseScroll', preventDefault, false);
  // window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  // window.removeEventListener('touchmove', preventDefault, wheelOpt);
  // window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  // console.log('enabled');
  // stopFlag = true;
  setTimeout(function () {
    body.removeClass('no-scroll');
  }, 1000)
}



$(window).on('load', function () {
  // alert('page is loaded');
  console.log('page is loaded');

});
// const lottie = require("../libs/lottie.js");


// function init() {
//   // create GUI Setings
//   const gui = new dat.GUI();

//   // create scene
//   container = document.querySelector('.scene');
//   scene = new THREE.Scene();

//   // camera
//   // camera arguments
//   const fov = 35;
//   const aspect = container.clientWidth / container.clientHeight;
//   const near = 1;
//   const far = 20000;

//   // create camera
//   camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

//   //camera position
//   // camera.position.set(0, 0, 2500);
//   // camera.position.x = 100;
//   // camera.position.y = 100;
//   // camera.position.z = 2500;

//   // camera gui settings
//   let cameraController = new function () {
//     this.positionX = 0;
//     this.positionY = 0;
//     this.positionZ = 650;
//   }();

//   let view = gui.addFolder('Camera');
//   view.add(cameraController, 'positionX', 0, 100, 1).onChange(function () {
//     camera.position.x = (cameraController.positionX);
//   });
//   view.add(cameraController, 'positionY', 0, 100, 1).onChange(function () {
//     camera.position.y = (cameraController.positionY);
//   });
//   view.add(cameraController, 'positionZ', 0, 2500, 10).onChange(function () {
//     camera.position.z = (cameraController.positionZ);
//   });



//   // light
//   const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//   scene.add(ambientLight);

//   const light = new THREE.DirectionalLight(0xffffff, 1);
//   light.position.set(10, 10, 1);
//   scene.add(light);

//   // renderer
//   renderer = new THREE.WebGLRenderer({
//     antialias: true,
//     alpha: true
//   });
//   renderer.setSize(container.clientWidth, container.clientHeight);
//   renderer.setPixelRatio(window.devicePixelRatio);
//   container.appendChild(renderer.domElement);



//   // model
//   let loader = new THREE.GLTFLoader();

//   // load model
//   loader.load('../3d/phone/scene.gltf', function (gltf) {
//     scene.add(gltf.scene);
//     phone = gltf.scene.children[0];
//     // phone.position.set(200, 600, 0);
//     // phone.position.x = 200;
//     // phone.position.y = 600;
//     // phone.position.z = 0;
//     animate();
//   });

//   // phone gui settings
//   var phoneController = new function () {
//     this.positionX = 0;
//     this.positionY = 0;
//     // this.positionZ = 0;

//     // this.scaleX = 1;
//     // this.scaleY = 1;
//     // this.scaleZ = 1;

//     // this.rotationX = 0;
//     // this.rotationY = 90;
//     this.rotationZ = 0;
//     // this.boxColor = color;
//     // this.castShadow = true;
//     this.phoneOpacity = 1;
//   }();

//   // phone dat gui
//   let phone = gui.addFolder('Phone');
//   phone.add(phoneController, 'positionX', 0, 200).onChange(function () {
//     phone.position.x = (phoneController.positionX);
//   });
//   phone.add(phoneController, 'positionY', 0, 600).onChange(function () {
//     phone.position.y = (phoneController.positionY);
//   });
//   // phone.add(phoneController, 'positionZ', 0, 200).onChange(function () {
//   //   phone.position.z = (phoneController.positionZ);
//   // });
//   // phone.add(phoneController, 'rotationX', -100, 100, 1).onChange(function () {
//   //   phone.rotation.x = (phoneController.rotationX);
//   // });
//   // phone.add(phoneController, 'rotationY', -100, 100, 1).onChange(function () {
//   //   phone.rotation.y = (phoneController.rotationY);
//   // });
//   phone.add(phoneController, 'rotationZ', -6.4, 6.4, 0.2).onChange(function () {
//     phone.rotation.z = (phoneController.rotationZ);
//   });
//   phone.add(phoneController, 'phoneOpacity', 0, 1, 0.1).onChange(function () {
//     phone.opacity = (phoneController.phoneOpacity);
//   });
// }

// function animate() {
//   requestAnimationFrame(animate);
//   // phone.rotation.z += 0.005;
//   renderer.render(scene, camera);
// }

// init();

// function onWindowResize() {
//   camera.aspect = container.clientWidth / container.clientHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(container.clientWidth, container.clientHeight);
// }

// window.addEventListener("resize", onWindowResize);

// let scrollPos = 0;

// function scrollDetect() {
//   // detects new state and compares it with the new one
//   if ((document.body.getBoundingClientRect()).top > scrollPos)
//     console.log('UP');
//   else {
//     console.log('DOWN')
//     scrollPos = (document.body.getBoundingClientRect()).top;
//   }
// }


// // adding scroll event
// window.addEventListener('scroll', function () {
//   scrollDetect();
// });


// content loaded
// document.addEventListener('DOMContentLoaded', (event) => {

// });


// START *************************************************************************

const heroBg = $('.js-hero-bg');
const logo = $('.logo');
const showOnLoadEl = $('.js-show-on-load');
// console.log(showOnLoadEl);

function preloader() {

  logo.addClass('animate');
  setTimeout(function () {
    if ($('.header').hasClass('scrolled')) {
      logo.addClass('logo_animated');
    } else {
      // logo.removeClass('logo_animated');
      // logo.addClass('animate');
    }
  }, 100);

  showLogoAnimation();

  setTimeout(function () {
    heroBg.removeClass('js-active');
  }, 2000);

  setTimeout(function () {
    showOnLoadEl.removeClass('js-slide-top js-slide-down');
  }, 4000);
}



// main menu functionality
const burger = $('.js-burger');
const headerMenu = $('.js-menu');

function openMenu() {
  burger.toggleClass('open');
  headerMenu.toggleClass('open');
}

function closeMenu() {
  burger.removeClass('open');
  headerMenu.removeClass('open');
}

let downloadFlag = true;
let musicFlag = true;
let socialFlag = true;

function loadHeroAnimation() {
  const heroIphone = document.getElementById("heroIphone"),
    anim = lottie.loadAnimation({
      container: heroIphone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "./json/hero-iphone.json"
    });

  anim.addEventListener("enterFrame", function (animation) {
    if (animation.currentTime > (anim.totalFrames - 55)) {
      anim.pause();
    }
  });

  window.addEventListener('resize', function () {
    anim.resize();
  });
}

setTimeout(function () {
  loadHeroAnimation();
}, 3400);

function showLogoAnimation() {
  const logo = document.getElementById("logo"),
    anim = lottie.loadAnimation({
      container: logo,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "./json/loader.json"
    });
  window.addEventListener('resize', function () {
    anim.resize();
  });
}

function showDownloadIphone() {
  const downloadIphone = document.getElementById("downloadIphone"),
    anim = lottie.loadAnimation({
      container: downloadIphone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "./json/hero-iphone.json"
    });
  window.addEventListener('resize', function () {
    anim.resize();
  });
}

function showDownloadPhone() {
  const downloadPhone = document.getElementById("downloadPhone"),
    anim = lottie.loadAnimation({
      container: downloadPhone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "./json/download-phone.json"
    });
  window.addEventListener('resize', function () {
    anim.resize();
  });
}

function showMusicPhone() {
  const musicPhone = document.getElementById("musicPhone"),
    anim = lottie.loadAnimation({
      container: musicPhone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "./json/music-phone.json"
    });
  window.addEventListener('resize', function () {
    anim.resize();
  });
}

function showSocialPhone() {
  const socialPhone = document.getElementById("socialPhone"),
    anim = lottie.loadAnimation({
      container: socialPhone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "./json/social-phone.json"
    });
  window.addEventListener('resize', function () {
    anim.resize();
  });
}
let stopFirstFeatures = true;
let stopSecondFeatures = true;

function showOnScroll() {
  $('.js-screen').each(function () {


    let startPosition = 0;
    let windowStartPosition = $(window).scrollTop();
    let elem = $(this);
    let sectionPos = elem.offset().top;
    let windowPos = windowStartPosition + $(window).height() / 1.8;
    // let musicPosition = windowStartPosition + $(window).height();

    if (windowStartPosition > startPosition) {
      $('.header').addClass('scrolled');
      logo.addClass('logo_animated');
      logo.removeClass('animate');
    } else {
      $('.header').removeClass('scrolled');
    }
    if (sectionPos < windowPos) {
      elem.addClass('active');
    }
    if ($('.download').hasClass('active')) {
      if (downloadFlag) {
        showDownloadIphone();
        showDownloadPhone();
        downloadFlag = false;
      }
    }
    if ($('.music').hasClass('active')) {
      if (musicFlag) {
        showMusicPhone();
        musicFlag = false;
      }
    }
    if ($('.social').hasClass('active')) {
      if (socialFlag) {
        showSocialPhone();
        socialFlag = false;
      }
    }
    // if ($('[data-slide="1"]').hasClass('show')) {
    //   // console.log(stopFlag);
    //   console.log('first slide')
    //   if (stopFirstFeatures) {
    //     // disableScroll();
    //     body.addClass('no-scroll');

    //     setTimeout(function () {
    //       // enableScroll()
    //       body.removeClass('no-scroll');

    //     }, 1000);
    //     stopFirstFeatures = false;
    //   } else {
    //     stopFirstFeatures = true;

    //   }
    // }
    // // stopFlag = true;
    // if ($('[data-slide="2"]').hasClass('show')) {
    //   if (stopSecondFeatures) {
    //     // disableScroll();
    //     body.addClass('no-scroll');
    //     setTimeout(function () {
    //       // enableScroll()
    //       body.removeClass('no-scroll');
    //     }, 1000);
    //     stopSecondFeatures = false;
    //   }
    // }
  });
}

// function pauseOnSection() {
// if (stopFlag) {
//   disableScroll();
//   setTimeout(function () {
//     stopFlag = false;
//     enableScroll()
//   }, 1000);
// }
// }

$(document).ready(function () {

  // const swiper = new Swiper('.section__slider__sticky', {
  //   direction: 'horizontal',
  //   slidePerView: 1,
  //   // slidesPerGroup: 1,
  //   keyboard: {
  //     enable: true,
  //     // onlyInViewport: true,
  //     pageUpDown: true,
  //   },
  //   mousewheel: {
  //     sensitivity: 1,
  //   },
  //   // watchOverflow: true,
  //   // speed: 800,
  //   // observer: true,
  //   // obervePrents: true,
  //   // observeSlideChildren: true,
  //   // effect: 'fade',
  //   simulateTouch: true,
  //   on: {
  //     slideChange: function () {
  //       console.log(swiper.activeIndex);
  //       console.log(swiper.clickedIndex);

  //     },
  //     reachEnd: function () {
  //       console.log('last');
  //       simulateTouch: false;
  //     },
  //     reachBeginning: function () {
  //       // console.log('last');
  //       simulateTouch: true;
  //     },
  //   }
  // });

  // swiper.allowTouchMove = true;
  $('[data-slide="1"], [data-slide="2"], [data-slide="3"], [data-slide="4"], [data-slide="5"], [data-slide="6"]').mouseover(function () {
    console.log('hover1');
    disableScroll();
    setTimeout(function () {
      enableScroll();
      // $('[data-slide="1"]').css('pointer-events', 'none');
    }, 100);
  });
  // jQuery.scrollSpeed(100, 100);

  console.log('DOM завантажено');
  preloader();

  burger.on('click', function () {
    openMenu();
  })

  showOnScroll($(window).scrollTop());

  // function countdown() {
  //   let count = 0;
  //   let timerId = setInterval(function () {
  //     count++;
  //     console.log(count);

  //     if (count == 9) {
  //       count = 0;
  //     }
  //   }, 1000);
  // }

  // countdown();
  // console.log(countdown);

  // $('.js-page').pagepiling({
  //   menu: null,
  //   // direction: 'vertical',
  //   verticalCentered: false,
  //   sectionsColor: [],
  //   anchors: [],
  //   scrollingSpeed: 0,
  //   easing: 'linear',
  //   loopBottom: true,
  //   loopTop: true,
  //   css3: true,
  //   // navigation: {
  //   //   'textColor': '#fff',
  //   //   'bulletsColor': '#fff',
  //   //   'position': 'right',
  //   //   'tooltips': ['section1', 'section2', 'section3', 'section4']
  //   // },
  //   normalScrollElements: null,
  //   normalScrollElementTouchThreshold: 1,
  //   touchSensitivity: 1,
  //   keyboardScrolling: true,
  //   sectionSelector: screen,
  //   animateAnchor: false,

  //   //events
  //   onLeave: function (index, nextIndex, direction) {
  //     //fading out the txt of the leaving section
  //     // $('.section').eq(index - 1).fadeOut(400, 'linear');

  //     //fading in the text of the destination (in case it was fadedOut)
  //     // $('.section').eq(nextIndex - 1).fadeIn(1000, 'linear');
  //     // $('.section').eq(nextIndex - 1).find('.js-show-on-scroll').addClass();


  //     //reaching our last section? The one with our normal site?
  //     if (nextIndex >= 3 && nextIndex <= 8) {
  //       $('.ellipse').fadeOut();

  //       //fading out navigation bullets
  //       // $('#pp-nav').fadeOut();

  //     } else {
  //       $('.ellipse').fadeIn();
  //     }
  //     //leaving our last section? The one with our normal site?
  //     if (index == 4) {
  //       $('#arrow').show();

  //       //fadding in navigation bullets
  //       $('#pp-nav').fadeIn();

  //     }
  //   },
  //   afterLoad: function (anchorLink, index) {},
  //   afterRender: function () {},
  // });


  if ($("[data-lock-section]").length > 0) {
    const sliderSection = $('[data-lock-section]');
    const sliderSectionTop = sliderSection.offset().top;
    const sliderSectionBottom = (sliderSectionTop + sliderSection.height()); // minus offset
    const sliderSectionHeight = sliderSection.height();

    $(window).scroll(function () {
      $('.section__slider__sticky').stick_in_parent();
      let scrollPosition = window.pageYOffset;

      if (scrollPosition > sliderSectionTop && scrollPosition < sliderSectionBottom + 500) {

        let ss = scrollPosition - sliderSectionTop; // window scroll - section offset() top;
        let percent = (sliderSectionHeight - sliderSectionTop) / 100;
        let percentage = ss / percent;
        // console.log(percentage);

        if (percentage <= 16, 666 && percentage > 0) {
          $('.slide__item').removeClass('show');
          // $('.slide__item').addClass('showed');
          $('[data-slide="1"]').addClass('show');
          $('[data-slide="1"]').hover(function () {
            disableScroll();
            setTimeout(function () {
              enableScroll();
            }, 100);
          });
        }

        if (percentage <= 33.333 && percentage > 16.666) {
          $('.slide__item').removeClass('show');
          $('[data-slide="2"]').addClass('show');
          // stopFlag = true;
          $('[data-slide="2"]').hover(function () {
            disableScroll();
            setTimeout(function () {
              enableScroll();
            }, 100);
          });
          // pauseOnSection()
          // if (stopFlag) {
          //   disableScroll();
          //   setTimeout(function () {
          //     enableScroll()
          //     // stopFlag = false;
          //   }, 1000);
          // }
          // console.log(stopFlag);

          // $('[data-slide="1"]').addClass('showed');
        }
        if (percentage <= 49.93 && percentage > 33.333) {
          $('.slide__item').removeClass('show');
          $('[data-slide="3"]').addClass('show');
          $('[data-slide="3"]').hover(function () {
            disableScroll();
            setTimeout(function () {
              enableScroll();
            }, 100);
          });
          // pauseOnSection()
          // stopFlag = true;

          // if (stopFlag) {
          //   disableScroll();
          //   setTimeout(function () {
          //     // stopFlag = false;
          //     enableScroll()
          //   }, 1000);
          // }
          // stopFlag = false;

        }
        if (percentage <= 66.593 && percentage > 49.93) {
          $('.slide__item').removeClass('show');
          $('[data-slide="4"]').addClass('show');
          $('[data-slide="4"]').hover(function () {
            disableScroll();
            setTimeout(function () {
              enableScroll();
            }, 100);
          });
          // pauseOnSection()
          // stopFlag = true;

          // if (stopFlag) {
          //   disableScroll();
          //   setTimeout(function () {
          //     enableScroll()
          //   }, 1000);
          //   // stopFlag = false;

          // }
          // stopFlag = false;

        }
        if (percentage <= 83.259 && percentage > 66.593) {
          $('.slide__item').removeClass('show');
          $('[data-slide="5"]').addClass('show');
          $('[data-slide="5"]').hover(function () {
            disableScroll();
            setTimeout(function () {
              enableScroll();
            }, 100);
          });
          // pauseOnSection()
          // stopFlag = true;

          // if (stopFlag) {
          //   disableScroll();
          //   setTimeout(function () {
          //     stopFlag = false;
          //     enableScroll()
          //   }, 1000);
          // }
          // stopFlag = false;

        }
        if (percentage > 83.259 && percentage <= 100) {
          $('.slide__item').removeClass('show');
          $('[data-slide="6"]').addClass('show');
          // pauseOnSection()
          // stopFlag = true;
          $('[data-slide="6"]').hover(function () {
            disableScroll();
            setTimeout(function () {
              enableScroll();
            }, 100);
          });

          // if (stopFlag) {
          //   disableScroll();
          //   setTimeout(function () {
          //     stopFlag = false;
          //     enableScroll()
          //   }, 1000);
          // }
          // stopFlag = false;

        }
        if (percentage >= 100) {
          $('.slide__item').removeClass('show');
          percentage = 100;
        }
        // if (percentage <= 2) {
        //   $('.slide__item').removeClass('show');
        //   percentage = 1;
        // }
        // if (percentage >= 100) {
        // }
        // if (percentage <= 2) {
        // }
        // console.log(percentage);
      }
    });
  }

  let startScroll = 0;
  $(window).scroll(function () {
    const scrollValue = $(this).scrollTop();
    showOnScroll(scrollValue);
    scrollValue >= 1 ? closeMenu() : null;

    let currentScrollPosition = $(this).scrollTop();

    if (currentScrollPosition > startScroll) {
      console.log('scroll down');

    } else {
      console.log('scroll up');
      if (!$('.section__slider__sticky').hasClass('is_stuck')) {
        console.log('dont');
        $('.slide__item').removeClass('show');
      }
      console.log($('.download').scrollTop);
      if (scrollValue <= $('[data-slide="1"]').offset().top && $('[data-slide="1"]').hasClass('show')) {
        $('[data-slide="1"]').css('pointer-events', 'none');
      } else {

      }
    }
    startScroll = currentScrollPosition;

  })

});

// if (window.addEventListener) {
//   window.addEventListener('DOMMouseScroll', wheel, false);
//   window.onmousewheel = document.onmousewheel = wheel;
// }

// function wheel(event) {
//   var delta = 0;
//   if (event.wheelDelta) delta = (event.wheelDelta) / 120;
//   else if (event.detail) delta = -(event.detail) / 3;

//   handle(delta);
//   if (event.preventDefault) event.preventDefault();
//   event.returnValue = false;
// }

// function handle(sentido) {
//   var inicial = document.body.scrollTop;
//   var time = 1000;
//   var distance = 200;
//   animate({
//     delay: 0,
//     duration: time,
//     delta: function (p) {
//       return p;
//     },
//     step: function (delta) {
//       window.scrollTo(0, inicial - distance * delta * sentido);
//     }
//   });
// }

// function animate(opts) {
//   var start = new Date();
//   var id = setInterval(function () {
//     var timePassed = new Date() - start;
//     var progress = (timePassed / opts.duration);
//     if (progress > 1) {
//       progress = 1;
//     }
//     var delta = opts.delta(progress);
//     opts.step(delta);
//     if (progress == 1) {
//       clearInterval(id);
//     }
//   }, opts.delay || 10);
// }

// detect webp support
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});



// function loadData() {
//   return new Promise((resolve, reject) => {
//     // setTimeout не является частью решения
//     // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
//     setTimeout(resolve, 2000);
//   })
// }

// loadData()
//   .then(() => {
//     let preloaderEl = document.getElementById('preloader');
//     preloaderEl.classList.add('hidden');
//     preloaderEl.classList.remove('visible');
//   });


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36


function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}