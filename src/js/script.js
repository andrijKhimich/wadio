const body = $('body');
// call this to Disable
function disableScroll() {
  body.addClass('no-scroll');
}

// call this to Enable
function enableScroll() {
  setTimeout(function () {
    body.removeClass('no-scroll');
  }, 1000)
}


// START *************************************************************************

const heroBg = $('.js-hero-bg');
const logo = $('.logo');
const showOnLoadEl = $('.js-show-on-load');

// function countdown() {
//   let count = 0;
//   let timerId = setInterval(function () {
//     count++;
//     console.log(count);

//     if (count == 100) {
//       count = 0;
//     }
//   }, 10);
// }

// countdown();

let loaderStep = 0;

function loder() {
  if (loaderStep == 0) {
    loaderStep = 1;
    const elemWrap = $(".progress-wrap");
    const elem = $(".progress-bar");
    const valueElem = $(".progress-value");

    let width = 1;
    const id = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.css("width", width + "%");
        valueElem.html(width + "%");
      }
    }

    setTimeout(function () {
      elemWrap.css("opacity", "0");
    }, 2000);
  }
}

function preloader() {
  loder();

  setTimeout(function () {

    logo.addClass('animate');
    setTimeout(function () {
      if ($('.header').hasClass('scrolled')) {
        logo.addClass('logo_animated');
      }
    }, 100);

    showLogoAnimation();

    setTimeout(function () {
      heroBg.removeClass('js-active');
    }, 2000);

    setTimeout(function () {
      showOnLoadEl.removeClass('js-slide-top js-slide-down');
    }, 4000);
  }, 3000)
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
}, 6400);

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

// LottieInteractivity.create({
//   player: "#socialMob",
//   mode: "scroll",
//   actions: [{
//       visibility: [0, 0.2],
//       type: "stop",
//       frames: [0]
//     },
//     {
//       visibility: [0.2, 0.45],
//       type: "seek",
//       frames: [0, 45]
//     },
//     {
//       visibility: [0.45, 1.0],
//       type: "loop",
//       frames: [69, 70]
//     }
//   ]
// });


// // sets default vlaue of surrounding div to none so it doesnt appear
// let animationDiv = document.getElementById('scrollingArea')
// animationDiv.style.display = "none"

// // need to pass in the div where you want the item to load and the file location
// function loader(div, pathLocation) {
//   let animation = bodymovin.loadAnimation({
//     container: div,
//     renderer: "svg",
//     loop: 1,
//     autoplay: true,
//     path: pathLocation
//   });
//   animation.play();
// }

// window.addEventListener('scroll', () => {
//   // can set scroll height by changing the number
//   let scrollHeightPercent = document.documentElement.scrollHeight * 0.08
//   let currentPOS = document.documentElement.scrollTop || document.body.scrollTop

//   // once the scroll height has gone past the % stated abvoe it will make the style appear
//   if (currentPOS >= scrollHeightPercent) {
//     let animationDiv = document.getElementById('scrollingArea');
//     if (animationDiv.style.display == 'none') {
//       // stuff here
//       animationDiv.style.display = ""

//       let bodyMotion1 = document.getElementById('lottie-scroll-1');
//       loader(bodyMotion1, "YOUR_ANIMATION_PATH")
//     };
//   };
// });

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
  });
}


$(document).ready(function () {

  $(window).on('load', function () {
    console.log('page is loaded');
    setTimeout(function () {
      $('#preloader').fadeOut('slow', function () {});
    }, 2000);

  });


  console.log('DOM завантажено');
  if ($(window).width() > 991) {
    preloader();
  }

  burger.on('click', function () {
    openMenu();
  })

  showOnScroll($(window).scrollTop());

  let startScroll = 0;
  $('.section__slider_sticky').stick_in_parent();

  if ($("[data-lock-section]").length > 0) {
    const sliderSection = $('[data-lock-section]');
    const sliderSectionTop = sliderSection.offset().top;
    const sliderSectionBottom = (sliderSectionTop + sliderSection.height()); // minus offset
    const sliderSectionHeight = sliderSection.height();
    // $('.section__slider_sticky').stick_in_parent();

    $(window).scroll(function () {
      let scrollPosition = $(this).scrollTop();

      if (scrollPosition > sliderSectionTop && scrollPosition < sliderSectionBottom + 500) {
        let ss = scrollPosition - sliderSectionTop; // window scroll - section offset() top;
        let percent = (sliderSectionHeight - sliderSectionTop) / 100;
        let percentage = ss / percent;
        if (scrollPosition > startScroll) {
          console.log('scroll down');
          if (percentage <= 16, 666 && percentage > 0) {
            $('.slide__item').removeClass('show');
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
            $('[data-slide="1"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="1"]').removeClass('showed');
            }, 1000);
            $('[data-slide="2"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });
          }
          if (percentage <= 49.93 && percentage > 33.333) {
            $('.slide__item').removeClass('show');
            $('[data-slide="3"]').addClass('show');
            $('[data-slide="2"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="2"]').removeClass('showed');
            }, 1000);
            $('[data-slide="3"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });
          }
          if (percentage <= 66.593 && percentage > 49.93) {
            $('.slide__item').removeClass('show');
            $('[data-slide="4"]').addClass('show');
            $('[data-slide="3"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="3"]').removeClass('showed');
            }, 1000)
            $('[data-slide="4"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });
          }
          if (percentage <= 83.259 && percentage > 66.593) {
            $('.slide__item').removeClass('show');
            $('[data-slide="5"]').addClass('show');
            $('[data-slide="4"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="4"]').removeClass('showed');
            }, 1000)
            $('[data-slide="5"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });
          }
          if (percentage > 83.259 && percentage <= 100) {
            $('.slide__item').removeClass('show');
            $('[data-slide="6"]').addClass('show');
            $('[data-slide="5"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="5"]').removeClass('showed');
            }, 1000);
            $('[data-slide="6"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });
          }
          if (percentage >= 100) {
            $('.slide__item').removeClass('show');
            percentage = 100;
          }
          console.log(percentage);
        } else {
          console.log('scroll up');
          if (percentage <= 16, 666 && percentage > 0) {
            $('.slide__item').removeClass('show');
            // $('.slide__item').addClass('showed');
            $('[data-slide="1"]').addClass('show');
            $('[data-slide="2"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="2"]').removeClass('showed');
            }, 1000);
            $('[data-slide="1"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });
          }

          // 2 element
          if (percentage <= 33.333 && percentage > 16.666) {
            $('.slide__item').removeClass('show');
            $('[data-slide="2"]').addClass('show');
            $('[data-slide="2"]').removeClass('showed');

            $('[data-slide="3"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="3"]').removeClass('showed');
            }, 1000);
            $('[data-slide="2"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });
          }

          // 3 element
          if (percentage <= 49.93 && percentage > 33.333) {
            $('.slide__item').removeClass('show');
            $('[data-slide="3"]').addClass('show');
            $('[data-slide="4"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="4"]').removeClass('showed');
            }, 1000)
            $('[data-slide="3"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });

          }

          // 4 element
          if (percentage <= 66.593 && percentage > 49.93) {
            $('.slide__item').removeClass('show');
            $('[data-slide="4"]').addClass('show');
            $('[data-slide="5"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="5"]').removeClass('showed');
            }, 1000)
            $('[data-slide="4"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });

          }
          // 5 element
          if (percentage <= 83.259 && percentage > 66.593) {
            $('.slide__item').removeClass('show');
            $('[data-slide="5"]').addClass('show');
            $('[data-slide="6"]').addClass('showed');
            setTimeout(function () {
              $('[data-slide="6"]').removeClass('showed');
            }, 1000)
            $('[data-slide="5"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });

          }
          // 6 element
          if (percentage > 83.259 && percentage <= 100) {
            $('.slide__item').removeClass('show');
            $('[data-slide="6"]').addClass('show');
            $('[data-slide="6"]').hover(function () {
              disableScroll();
              setTimeout(function () {
                enableScroll();
              }, 100);
            });
          }

          if (percentage >= 100) {
            $('.slide__item').removeClass('show');
            percentage = 100;
          }
          console.log(percentage);

        }
        startScroll = scrollPosition;
      }

    });
  }


  $(window).scroll(function () {
    const scrollPosition = $(this).scrollTop();
    showOnScroll(scrollPosition);
    scrollPosition >= 1 ? closeMenu() : null;

    if (scrollPosition > $('.music').offset().top - ($('.music').height() * 2)) {
      // $('.features__shine').hide();
      $('.features__shine').css('opacity', '0');
      console.log('yes');
    } else {
      $('.features__shine').css('opacity', '1');
    }
    if (scrollPosition > startScroll) {
      // console.log('scroll down');

    } else {
      // console.log('scroll up');
      if (!$('.section__slider_sticky').hasClass('is_stuck')) {
        $('[data-slide=1]').removeClass('show');
        $('.features__shine').css('opacity', '0');
      }

      if (scrollPosition <= $('[data-slide="1"]').offset().top && $('[data-slide="1"]').hasClass('show')) {
        $('[data-slide="1"]').addClass('disable-click');
      } else {
        $('[data-slide="1"]').removeClass('disable-click');
      }

      if (scrollPosition < $('.section__slider').offset().top) {
        $('.section__slider').removeClass('active');
      }
    }
    startScroll = scrollPosition;
  })
});

window.onload = function () {
  document.body.classList.add('no-scroll');
  window.setTimeout(function () {
    // document.body.classList.add('loaded');
    document.body.classList.remove('no-scroll');
  }, 1500);
}

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