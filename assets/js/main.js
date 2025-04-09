$(document).ready(function() {
  // header scroll
  var header = $("header");
  var scrollPoint = 200;

  $(window).scroll(function () {
      if ($(this).scrollTop() > scrollPoint) {
          if (!header.hasClass("scroll")) {
              header.addClass("scroll").hide().slideDown(300);
          }
      } else {
          header.removeClass("scroll");
      }
  });

  // menu toggle
  $('#menuToggle').click(function () {
    const menu = $('.mobile-menu');
    const header = $('header');
    
    if (menu.hasClass('hidden')) {
      menu.removeClass('hidden').hide().slideDown(300);
      header.css('background-color', '#F6F6F6');
    } else {
      menu.slideUp(300, function () {
        menu.addClass('hidden');
        header.css('background-color', 'transparent');
      });
    }
  });

  //search toggle
  $('#searchToggle').click(function (e) {
    e.stopPropagation();
    $('.search-box').slideToggle(300);
  
    $(document).one('click', function () {
      $('.search-box').slideUp(300, function () {
        $(this).addClass('hidden');
      });
    });
  });
  
  $('.search-box').click(function (e) {
    e.stopPropagation();
  });
  
  
  // video
  $('#playButton').on('click', function () {
    $('.videoThumbnail').addClass('hidden');
    $(this).hide();
    $('.videoFrame').append(`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/G-rsmbK7gdY?si=LzecV3mdpYHp6tS7&autoplay=1&rel=0&showinfo=0" title="YouTube video player" frameborder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
  });

  // slick
  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '280px',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
          centerPadding: '400px',
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          centerPadding: '300px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]
  });
});
