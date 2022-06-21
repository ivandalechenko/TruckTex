$('.slidermeow').slick({
	infinite: true,
  centerMode: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});

$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.inline_block').toggleClass('active'); 
    $('.header_burger').toggleClass('active'); 
    $('.meow').toggleClass('super_sm'); 
    $('.blr').toggleClass('blr2'); 
    $('body').toggleClass('oh'); 
  });
  $('.header_burger_element').click(function(event) {
    $('.inline_block').removeClass('active'); 
    $('.header_burger').removeClass('active'); 
    $('.meow').removeClass('super_sm'); 
    $('.blr').removeClass('blr2'); 
    $('body').removeClass('oh');
  });
  $(".scrollto").click(function(event) {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    $('.inline_block').removeClass('active'); 
    $('.header_burger').removeClass('active'); 
    $('.meow').removeClass('super_sm'); 
    $('.blr').removeClass('blr2'); 
    $('body').removeClass('oh');
  });
});