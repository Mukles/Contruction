$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        // init: false,
        autoplay: {
            delay: 3000,
            speed:300,
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
        breakpoints: {
          991: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      });

    new WOW().init();
    //navbar 
    var callingFn;
    var slide = $('.slide');
    var slideNext = $('.slider .next-btn');
    var sliderPrev = $('.slider .prev-btn');

    slide.on('mouseover',function(){
        clearInterval(callingFn)
    })

    slide.on('mouseout',function(){
        callingFn = setInterval(ChangeImg,8000)
    })

    callingFn = setInterval(ChangeImg,5000);
    slideNext.on('click',ChangeImg);
    sliderPrev.on('click',function(){
        if(slide.eq(3).hasClass('active')){
            slide.eq(3).removeClass('active')
            slide.eq(2).addClass('active')
        }
        else if(slide.eq(2).hasClass('active')){
            slide.eq(2).removeClass('active')
            slide.eq(1).addClass('active')
        }
        else if(slide.eq(1).hasClass('active')){
            slide.eq(1).removeClass('active')
            slide.eq(0).addClass('active')
        }
        else if(slide.eq(0).hasClass('active')){
            slide.eq(0).removeClass('active')
            slide.eq(1).addClass('active')
        }
    })

    function ChangeImg(){
        if(slide.eq(0).hasClass('active')){
            slide.eq(0).removeClass('active')
            slide.eq(1).addClass('active')
        }
        else if(slide.eq(1).hasClass('active')){
            slide.eq(1).removeClass('active')
            slide.eq(2).addClass('active')
        }
        else if(slide.eq(2).hasClass('active')){
            slide.eq(2).removeClass('active')
            slide.eq(3).addClass('active')
        }
        else if(slide.eq(3).hasClass('active')){
            slide.eq(3).removeClass('active')
            slide.eq(0).addClass('active')
        }
    }
   
    $(window).scroll(function(e){
        var CurrentScrolPosition = $(window).scrollTop();
        if(CurrentScrolPosition > 120){
            $('nav.navbar').addClass('fixed-lg-top bg-light pt-1')
        }
        if(CurrentScrolPosition < 120){
            $('nav.navbar').removeClass('fixed-lg-top bg-light')
        }
        
        console.log(CurrentScrolPosition)
    })



    var project = $('.project')
    var navigation = $('.filterButton');
    navigation.on('click',function(e){
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        var data_filter = $(this).attr('data-filter');
        $(project).isotope({filter:data_filter})
    })
    
    $('').hover(function(){
        $('.dropdown-menu.overlay-menu').css("display","block");
    }).mousedown(function(){
        $('.dropdown-menu.overlay-menu').css("display","none");
    })

    var imgbox = $('.imgbox');
    imgbox.on('mouseover',function(){
        $(this).find('h4,a').addClass('animated fadeInUp');
        $(this).find('h4,a').removeClass('fadeOutDown');
    });
    imgbox.on('mouseout',function(){
        $(this).find('h4').css('animation-delay','300ms')
        $(this).find('h4,a').removeClass('animated fadeInUp');
        $(this).find('h4,a').addClass('animated fadeOutDown');

    })



})