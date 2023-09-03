$(function () {
  "use strict";


  // custom coursor
  // if ($(".custom-cursor").length) {

  //   var cursor = document.querySelector('.custom-cursor__cursor');
  //   var cursorinner = document.querySelector('.custom-cursor__cursor-two');
  //   var a = document.querySelectorAll('a');

  //   document.addEventListener('mousemove', function (e) {
  //     var x = e.clientX;
  //     var y = e.clientY;
  //     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  //   });

  //   document.addEventListener('mousemove', function (e) {
  //     var x = e.clientX;
  //     var y = e.clientY;
  //     cursorinner.style.left = x + 'px';
  //     cursorinner.style.top = y + 'px';
  //   });

  //   document.addEventListener('mousedown', function () {
  //     cursor.classList.add('click');
  //     cursorinner.classList.add('custom-cursor__innerhover')
  //   });

  //   document.addEventListener('mouseup', function () {
  //     cursor.classList.remove('click')
  //     cursorinner.classList.remove('custom-cursor__innerhover')
  //   });

  //   a.forEach(item => {
  //     item.addEventListener('mouseover', () => {
  //       cursor.classList.add('custom-cursor__hover');
  //     });
  //     item.addEventListener('mouseleave', () => {
  //       cursor.classList.remove('custom-cursor__hover');
  //     });
  //   })
  // }


  // jquery nice select js
  $(document).ready(function () {
    $('select').niceSelect();
  });

  // sticky menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-lg').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-lg').css('top', '-100px');
    }
  });

  // sidebar menu js
  $(".bars").on("click", function () {
    $(".sidebar-menu").addClass("show-sidebar-menu");
  })

  $(".close-menu").on("click", function () {
    $(".sidebar-menu").removeClass("show-sidebar-menu");
  })

  // video widget slider
  $(".video-slider-widget").slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    fade: false,
    autoplay: false,
    dots: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  })

  // image slider widget
  $(".image-background-slider").slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    fade: false,
    autoplay: true,
    dots: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  })


  // $(window).on("load", function () {
  //   var preloader = $('#preloader');

  //   // Hide preloader and fade in content after a delay
  //   setTimeout(function () {
  //     preloader.fadeOut(500)
  //   }, 0); // Change the delay value as per your requirement

  // });

  // $(".banner").slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 800,
  //   autoplaySpeed: 5000,
  //   slidesToShow: 1,
  //   fade: false,
  //   autoplay: false,
  //   slidesToScroll: 1,
  //   prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
  //   nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  // }).slickAnimation();



  // back to top js
  var btn = $("#button");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });

  // // Animation on scroll
  // $(window).on("load", function () {
  //   setTimeout(() => {
  //     AOS.init({
  //       once: false,
  //     });
  //   }, 0);
  // });

  // // counter up js
  // $('.counter').counterUp({
  //   delay: 50,
  //   time: 2000
  // });


  // let elt = document.querySelectorAll('.why--choose--text--slider > *')

  // anime({
  //   targets: elt,
  //   translateX: '-100%',
  //   duration: 50000,
  //   easing: 'linear',
  //   loop: true
  // });

  // let elt1 = document.querySelectorAll('.pricing--plan--text--slider > *')

  // anime({
  //   targets: elt1,
  //   translateX: '-100%',
  //   duration: 50000,
  //   easing: 'linear',
  //   loop: true
  // });


  // mobile menu js
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-main').addClass('show-mobile-menu')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });


  // // Get all the choose--list elements
  // const chooseListItems = document.querySelectorAll('.choose--list');

  // // Add event listeners for hover
  // chooseListItems.forEach(item => {
  //   item.addEventListener('mouseenter', () => {
  //     // Remove active class from all choose--list elements
  //     chooseListItems.forEach(listItem => {
  //       listItem.classList.remove('active--list');
  //     });
  //     // Add active class to the hovered element
  //     item.classList.add('active--list');
  //   });
  // });


});