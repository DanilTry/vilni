$(function() {
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
    })
    $('.slider_2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
    })

    if (window.matchMedia("(max-width:991.99px)").matches){
        $('.slider_2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
        })
    } else{
        $('.slider_2').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
        })
    }
})
