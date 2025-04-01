document.addEventListener('DOMContentLoaded', function() {
    let splide = new Splide('.splide', {
      direction: 'ttb',
      perPage: 2, 
      height: '750px',
      wheel: true,
      type: 'loop',
      pagination: false,
      autoplay: true,
      interval: 2700,
      arrows: false,
      pauseOnHover:true
    });
  
    splide.mount();})
  