$(document).ready(function() {

    $(".burger").click(function(event) {
        $(".burger, .nav").toggleClass("active");
        $("body").toggleClass("lock");
    });

    $('.nav').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.clients__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
             {
                 breakpoint: 993,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                     arrows: false,
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows: false,
                 }
             },
         ]
    });
    
    // fixed header ===============================================
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
        
    });
    
    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };
    
   // smooth scroll =================================================

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this);
        var blockId = $(this).data("scroll");
        var blockOffset = $(blockId).offset().top -101; //-63 это высота header (если он фиксед)
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);  // 500 - скорость анимации (0.5 сек)
    });
    
    

});