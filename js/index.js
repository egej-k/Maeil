$(document).ready(function() {
    /* header */
    $(".gnb ul").hover(
        function(){
        $(".gnb div, .nav_bg").stop().slideDown();
        },
        function(){
            $(".gnb div, .nav_bg").stop().slideUp();
        });

    /* main content */
    var swiper = new Swiper(".swiper", {
        spaceBetween: 30,
        effect: "fade",
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
    // Play/Pause Button
    var playPauseButton = $('#playPauseButton');
    var isPlaying = true;

    playPauseButton.on('click', function() {
        if (isPlaying) {
            swiper.autoplay.stop();
            playPauseButton.attr('src', 'images/pause.png');
        } else {
            swiper.autoplay.start();
            playPauseButton.attr('src', 'images/play.png');
        }
        isPlaying = !isPlaying;
    });

    /* gallery */
    $(function () {
        $(".pager .before a").click(function () {
          $(".product_wrap ul").animate({ left: 0 });
        });
      });
    
      $(function () {
        $(".pager .next a").click(function () {
          $(".product_wrap ul").animate({ left: -1224 });
        });
      });
    
    /* main bottom & footer */
    $(".family_site_option li").on("click", function (event) {
        event.stopPropagation(); 
        $(".family_site_option li").removeClass("active");
        $(this).addClass("active"); 
    });
    $(".family_site h3").on("click", function (event) {
        event.stopPropagation(); 
        event.preventDefault(); 
        $(".family_site ul").slideToggle(200); 
        $(".family_site").toggleClass("active"); 
    });
    $(document).on("click", function () {
        if ($(".family_site").hasClass("active")) {
            $(".family_site ul").slideUp(200);
            $(".family_site").removeClass("active");
        }
    });
});