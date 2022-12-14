$(document).ready(function ($) {
  $(".swiper-wrapper").slick({
    infinite: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg" id="_20" data-name="20"><path d="m12 19a1 1 0 0 1 -.71-.29l-6-6a1 1 0 0 1 0-1.41l6-6a1 1 0 0 1 1.41 1.41l-5.29 5.29 5.29 5.29a1 1 0 0 1 -.7 1.71z" fill="#616087" data-original="#000000"></path><path d="m18 19a1 1 0 0 1 -.71-.29l-6-6a1 1 0 0 1 0-1.41l6-6a1 1 0 0 1 1.41 1.41l-5.29 5.29 5.29 5.29a1 1 0 0 1 -.7 1.71z" fill="#616087" data-original="#000000"></path></g></g></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="_19" data-name="19"><path d="m12 19a1 1 0 0 1 -.71-1.71l5.3-5.29-5.3-5.29a1 1 0 0 1 1.41-1.41l6 6a1 1 0 0 1 0 1.41l-6 6a1 1 0 0 1 -.7.29z" fill="#616087" data-original="#000000" class=""></path><path d="m6 19a1 1 0 0 1 -.71-1.71l5.3-5.29-5.3-5.29a1 1 0 0 1 1.42-1.42l6 6a1 1 0 0 1 0 1.41l-6 6a1 1 0 0 1 -.71.3z" fill="#616087" data-original="#000000" class=""></path></g></g></svg></button>',
  });
  $('.swiper-wrapper1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.swiper-wrapper2'
  });
  $('.swiper-wrapper2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.swiper-wrapper1',
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true
  });
  // $('.product-image').zoom();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.back-to-top').addClass('show');
    } else {
      $('.back-to-top').removeClass('show');
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $('.menu-icon i').click(function () {
    $('.wrapper-menu-mb').addClass('active_mb');
    $('.site-overlay').addClass('active');
  });
  $('.close-menu-mb').click(function () {
    $('.wrapper-menu-mb').removeClass('active_mb');
    $('.site-overlay').removeClass('active');
  })
  $('.site-overlay').click(function () {
    $('.wrapper-menu-mb').removeClass('active_mb');
    $(this).removeClass('active');
  })
});
