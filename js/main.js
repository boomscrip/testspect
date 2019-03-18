$(function () {
	$(window).scrollTop(0);
});


$(function () {
    $(document).on('mousemove', function (e) {
        $('.pen-small').css({
            left: -e.pageX / 200 + 10 ,
            top: -e.pageY / 200 + 10
        });
        $('.box__clothes').css({
					left: -e.pageX / 200 + 10,
					top: -e.pageY / 200 + 10
        });
    });
});


$(document).on("scroll", window, function () {
    if ($(window).scrollTop()>100)
    {
        $(".dog").show();
				$(".dog").css({
					display: block
				});
    }
    else
    {
        $(".dog").hide();
    }
    });


$(function () {
            var element = $('#dog');
            $(window).scroll(function () {
							element.css('right',250 +  $(this).scrollTop() * (window.innerWidth - 200) / $("#container").height() + "px");
            });
        });
