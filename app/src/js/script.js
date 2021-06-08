
/*-------- Variables Constant---------*/
const windowWidth = window.innerWidth;

$(document).ready(()=>{
    /*--------Slick Banner Home page-------*/
    $('#banner-home').slick({
        infinite: false,
        autoPlay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="banner__block_left"><img src="./img/slick-left.svg" alt=""></button>',
        nextArrow: '<button class="banner__block_right"><img src="./img/slick-right.svg" alt=""></button>'
    })
    /* -------Slick Carousel product left---------------- */
    $('#product-slick').slick({
        infinite: false,
        autoPlay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="banner__item_left slick-controls position-absolute"><img src="./img/slick-left.svg" alt=""></button>',
        nextArrow: '<button class="banner__item_right slick-controls position-absolute"><img src="./img/slick-right.svg" alt=""></button>'
    })



    $('#categories-home').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            }
        ]

    });


    /* -----------------PRODUCT PAGE ITEM SLICK----------------- */
    $('#item-slick').slick({
        infinite: false,
        autoPlay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="position-absolute product-left-btn" ><img src="./img/slick-left.svg" alt=""></button>',
        nextArrow: '<button class="position-absolute product-right-btn" ><img src="./img/slick-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    })
    /*------ Lider Block Page Product---------*/
    $('#lider-slick-2').slick({
        infinite: false,
        autoPlay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="lider__left lider__btn_sl position-absolute"><img src="./img/slick-left.svg" alt=""></button>',
        nextArrow: '<button class="lider__right lider__btn_sl position-absolute"><img src="./img/slick-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })


    /*-------Window Resize Function---------*/

    function windowResize(){
        $('#categories-home').slick('reinit');
        if(window.innerWidth>=992){

            $('#lider-slick').not('.slick-initialized').slick({
                infinite: false,
                autoPlay: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                prevArrow: '<button class="lider__left lider__btn_sl position-absolute"><img src="./img/slick-left.svg" alt=""></button>',
                nextArrow: '<button class="lider__right lider__btn_sl position-absolute"><img src="./img/slick-right.svg" alt=""></button>',
            })

        }else {

            $('#lider-slick').slick('unslick')
        }

    }

    $(window).on('resize', windowResize)
    windowResize()


})








