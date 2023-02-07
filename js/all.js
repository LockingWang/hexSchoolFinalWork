$(document).ready(function () {
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
});