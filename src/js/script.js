// let container, camera, renderer, scene, phone;

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
    heroBg.addClass('js-active');
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
$(document).ready(function () {

  console.log('DOM полностью загружен и разобран');
  preloader();

  burger.on('click', function () {
    openMenu();
  })




  // $(window).bind('mousewheel', function () {
  let activeFeatures = $('.js-page').children('.features').index() - 3;
  console.log(activeFeatures);
  // let activeFeatures = featuresSections.index();
  // $('.js-page').children('.features.active').index();
  // console.log();

  // console.log(activeFeatures);
  // console.log(paginationItem);
  // console.log(activeFeatures);
  // $('.pagination__item').removeClass('.active');
  // paginationItem.eq(activeFeatures).addClass('active');
  $(".pagination__list").each(function () {
    console.log($(this).children());
    $(this).children().each(function () {
      $('.pagination__item').eq(activeFeatures).addClass('active');
    });
    // $(this).toggleClass("example");
    // $(".pagination__list").each(function () {
    //   $('.pagination__item').eq(activeFeatures).addClass('active');
    // });

  });
  // });
  // $('.pagination__item').eq(activeFeatures).addClass('active');

  $('.js-page').pagepiling({
    menu: null,
    // direction: 'vertical',
    verticalCentered: false,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 0,
    easing: 'linear',
    loopBottom: true,
    loopTop: false,
    css3: true,
    // navigation: {
    //   'textColor': '#fff',
    //   'bulletsColor': '#fff',
    //   'position': 'right',
    //   'tooltips': ['section1', 'section2', 'section3', 'section4']
    // },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 1,
    touchSensitivity: 1,
    keyboardScrolling: true,
    sectionSelector: screen,
    animateAnchor: false,

    //events
    onLeave: function (index, nextIndex, direction) {
      //fading out the txt of the leaving section
      // $('.section').eq(index - 1).fadeOut(400, 'linear');

      //fading in the text of the destination (in case it was fadedOut)
      // $('.section').eq(nextIndex - 1).fadeIn(1000, 'linear');
      // $('.section').eq(nextIndex - 1).find('.js-show-on-scroll').addClass();


      //reaching our last section? The one with our normal site?
      if (nextIndex >= 3 && nextIndex <= 8) {
        $('.ellipse').fadeOut();

        //fading out navigation bullets
        // $('#pp-nav').fadeOut();

      } else {
        $('.ellipse').fadeIn();
      }
      //leaving our last section? The one with our normal site?
      if (index == 4) {
        $('#arrow').show();

        //fadding in navigation bullets
        $('#pp-nav').fadeIn();

      }
    },
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {},
  });
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