 $(document).ready(function(){
    $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
   })

})

function pageScroll() {
    window.scrollBy(0, -60);
    scrolldelay = setTimeout('pageScroll()', 22);
    if (document.body.scrollTop == 0) {
        clearTimeout(scrolldelay);
    }
};

$(window).scroll(function() {
    if ($(window).scrollTop() > 1000){
        $('#goto-top').show();
    }else{
        $('#goto-top').hide();
    }
});