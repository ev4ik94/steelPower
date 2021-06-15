
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
           
            if( $('#lider-slick').hasClass('slick-initialized')){
                $('#lider-slick').slick('unslick')
            }
            
        }

    }

    $(window).on('resize', windowResize)
    windowResize()


    /*------------ OPEN AUTH FORMS ------------------*/
    $('.btn-auth-forms').on('click', (e)=>{
        const id = e.currentTarget.getAttribute('data-id')
        $('.overlay-forms').addClass('active')
        $(`div[data-id=${id}]`).removeClass('d-none')
    })

    $('.close-forms').on('click', (e)=>{
        e.preventDefault()
        $('.overlay-forms').removeClass('active')
        $(`.overlay-forms div[data-id]`).addClass('d-none')
    })

    /*--------OPEN POPUP TIMOUT -----------------*/

    setTimeout(()=>{
        $('.overlay-forms').addClass('active')
        $('#popup').removeClass('d-none')
    }, 1000)



    /*-------Set Mask Input-----*/
    function setMask(){
        const inputMask = Array.from(document.querySelectorAll('input[data-type="mask-number"]'))
        inputMask.forEach(item=>{
            const phoneMask = IMask(
                item, {
                    mask: '+{7}(000)000-00-00',
                    lazy: false
                });
            console.log(item)
        })
    }

    setMask()

    /*==========CART PAGE================*/

    /*------- Radio Buttons Event Delivery Type -------------*/

    $('.item-select-type input[type="radio"]').on('click', (e)=>{
        const buttons = Array.from($('.item-select-type input[type="radio"]'))

        buttons.forEach(button=>{
            if(button!==e.currentTarget){
                button.checked = false
            }
            if(button.checked){
                button.parentElement.classList.add('active')
            }else{
                button.parentElement.classList.remove('active')
            }
        })
    })




})








