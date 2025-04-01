const swiper = new Swiper('.swiper', {
    
    direction:'horizontal',
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    // speed: 50000,
    slidesPerView: 2,
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });