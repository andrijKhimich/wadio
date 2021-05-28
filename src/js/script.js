// let container, camera, renderer, scene, phone;

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
    heroBg.removeClass('js-active');
  }, 2000);

  setTimeout(function () {
    showOnLoadEl.removeClass('js-slide-top js-slide-down');
  }, 3000);
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
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "../json/hero-iphone.json"
    });

  anim.addEventListener("enterFrame", function (animation) {
    if (animation.currentTime > (anim.totalFrames - 55)) {
      anim.pause();
    }
  });
}

setTimeout(function () {
  loadHeroAnimation();
}, 3400);

function showDownloadIphone() {
  const downloadIphone = document.getElementById("downloadIphone"),
    anim = lottie.loadAnimation({
      container: downloadIphone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "../json/hero-iphone.json"
    });
}

function showDownloadPhone() {
  const downloadPhone = document.getElementById("downloadPhone"),
    anim = lottie.loadAnimation({
      container: downloadPhone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "../json/download-phone.json"
    });
}

function showMusicPhone() {
  const musicPhone = document.getElementById("musicPhone"),
    anim = lottie.loadAnimation({
      container: musicPhone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "../json/music-phone.json"
    });
}

function showSocialPhone() {
  const socialPhone = document.getElementById("socialPhone"),
    anim = lottie.loadAnimation({
      container: socialPhone,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path: "../json/social-phone.json"
    });
}

function showOnScroll(scrollValue) {
  $('.js-screen').each(function () {
    let elem = $(this);
    let sectionPos = elem.offset().top;
    let windowPos = $(window).scrollTop() + $(window).height() / 2.6;
    if (sectionPos < windowPos) {
      // console.log(sectionPos, downloadPos);
      // $('.section').removeClass('active');
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
      console.log('start')
      if (socialFlag) {
        console.log(socialFlag)
        showSocialPhone();
        socialFlag = false;
      }
    }
  });
}

const screen = $('.js-screen');
let featuresSections = $('.features');
let pointsLenght = featuresSections.length - 1;
let pagination = $(".pagination__list");
let paginationItem;
// let paginationLink;

// function generatePager(pagination) {
for (let i = 0; i <= pointsLenght; i++) {
  // console.log(i);
  paginationItem = $("<li>").addClass("pagination__item").appendTo(pagination);
  // paginationLink = $("<a>").addClass("pagination__link").appendTo(paginationItem);
}






// window.scrollTo(0, 0);
// $(window).scrollTo(0, 0);

$(document).ready(function () {



  // $(window).on('resize', function () {
  // location.reload('.hero');
  // });
  // location.href('/');



  console.log('DOM завантажено');
  preloader();

  burger.on('click', function () {
    openMenu();
  })


  showOnScroll($(window).scrollTop());



  // $(window).bind('mousewheel', function () {
  //   let activeFeatures = $('.features.active');
  //   let activeFeaturesIndex = $('.features.active').index() - 3;
  //   $(".pagination__item").removeClass('.active');
  //   activeFeatures.find('.pagination__item').eq(activeFeaturesIndex).addClass('active');

  // });






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

  // $('.pagination__item').eq(activeFeatures).addClass('active');

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
    const slider_section = $('[data-lock-section]');
    const slider_section_top = slider_section.offset().top;
    const slider_section_bottom = (slider_section_top + slider_section.height()); // minus offset
    const slider_section_height = slider_section.outerHeight();
    let slider_counter = 0;
    let slide_delta = 0;
    let slide_index = 1;
    const body = $("body");

    // setInterval(function () {
    //     slider_container.removeClass("show");
    //     slider_container.eq(slider_counter).addClass("show");
    //     slider_counter++;

    //     if (slider_counter === slider_container.length) {
    //         slider_counter = 0;
    //     }
    // }, 2000);

    $(window).scroll(function () {
      // let s = window.scrollY;
      $('.section__slider__sticky').stick_in_parent();
      let s = window.pageYOffset;

      // console.log(s);
      if (s > slider_section_top && s < slider_section_bottom) {

        let ss = s - slider_section_top; // window scroll - section offset() top;
        let percent = (slider_section_height - slider_section_top) / 100;

        let percentage = ss / percent;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage <= 5) {
          percentage = 1;
        }
        console.log(percentage);
        if (percentage < 15 && percentage > 5) {
          // console.log('show element: 1');
          $('.slide__item').removeClass('show');
          $('[data-slide="1"]').addClass('show');
        }
        if (percentage < 29 && percentage > 15) {
          // console.log('show element: 2');
          $('.slide__item').removeClass('show');
          $('[data-slide="2"]').addClass('show');
        }
        if (percentage < 43 && percentage > 29) {
          // console.log('show element: 3');
          $('.slide__item').removeClass('show');
          $('[data-slide="3"]').addClass('show');
        }
        if (percentage < 57 && percentage > 43) {
          // console.log('show element: 4');
          $('.slide__item').removeClass('show');
          $('[data-slide="4"]').addClass('show');
        }
        if (percentage < 71 && percentage > 57) {
          // console.log('show element: 5');
          $('.slide__item').removeClass('show');
          $('[data-slide="5"]').addClass('show');
        }
        if (percentage < 85 && percentage > 71) {
          // console.log('show element: 6');
          $('.slide__item').removeClass('show');
          $('[data-slide="6"]').addClass('show');
        }
        if (percentage > 85 && percentage < 100) {
          // console.log('show element: 7');
          $('.slide__item').removeClass('show');
          // $('.slide__item').css('show');
          $('[data-slide="7"]').addClass('show');
        }
        if (percentage >= 100) {
          $('.slide__item').removeClass('show');
          console.log('100');
        }
        if (percentage <= 2) {
          $('.slide__item').removeClass('show');
          console.log('0');
        }
        // else {
        //   $('.slide__item').removeClass('show');

        // }
        // console.log('percent: ', percent, ' percentage: ', parseInt(percentage), ' ss: ', ss);

      }


      const scrollValue = $(this).scrollTop();
      showOnScroll(scrollValue);
      scrollValue >= 1 ? closeMenu() : null;




    });




  }
});


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


$(window).animate({
  scrollTop: 0
}, 1);