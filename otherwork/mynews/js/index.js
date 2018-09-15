$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            $('#goto-top').show();
        } else {
            $('#goto-top').hide();
        }
    })

    $(".content .list-group .item").click(function() {
        if (!$(this).hasClass("active-red")) {
            var list = $(".content .list-group .item");
            var group;
            for (var i = 0; i < list.length; i++) {
                group = $(list[i])
                if (group.hasClass('active-red')) {
                    group.removeClass("active-red")
                }
            }
            $(this).addClass("active-red")
        }
    })
})

function pageScroll() {
    window.scrollBy(0, -60);
    scrolldelay = setTimeout('pageScroll()', 22);
    if (document.body.scrollTop == 0) {
        clearTimeout(scrolldelay);
    }
}