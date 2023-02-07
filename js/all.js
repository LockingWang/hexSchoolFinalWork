$(document).ready(function () {
    /* 下拉式選單 */
    $('.product-intro').click(function (e) { 
        e.preventDefault();
        $('.product-list').slideToggle();
    });
    $('.navbar-list>li').click(function (e) { 
        e.preventDefault();
        $(this).find('a:first').toggleClass('clickOn');
        $(this).siblings().find('a:first').removeClass('clickOn');
        $(this).siblings().find('.product-list').slideUp();
    });

    /* 回到頂端按鈕 */
    $('.goToTop').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        },1000);
    });
    $(window).on('scroll',function() {
        if ( $(this).scrollTop() > 200){
          $('.goToTop').fadeIn("fast");
        } else {
          $('.goToTop').stop().fadeOut("fast");
        }
      });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
      },
    speed: 1000,
  });