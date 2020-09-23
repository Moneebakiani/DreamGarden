$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$(function(){ 
  
    $('input[type="number"]').niceNumber();
  
  });