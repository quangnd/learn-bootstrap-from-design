$(document).ready(function($) {
    $('#bannerCarousel').carousel({
            interval: 10000
    });

    $('#newsCarousel').carousel({
        interval: 10000
    })

    $('li.homeMenu').addClass('liActive');
    $('li.menuItem').hover(function(){
         //disable hover effect on active menu item
         if (!$(this).hasClass('liActive')) {
             $(this).toggleClass('liHover');
         }
    })

    $('li.menuItem').click(function(){
         $('li.menuItem').removeClass('liActive');
         $('li.menuItem').removeClass('liHover');
         
         $(this).addClass('liActive');
    })
});