const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  spaceBetween: 205, 
  slidesPerView: 2,
  // loop: true, 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false, 
  },

  pagination: {
    dynamicBullets: true, 
  },

  
});
