let splide = new Splide( `.splide.is-first`, {
  direction: 'ttb',
  perPage: 2, 
  height: '750px',
  wheel: true,
  type: 'loop',
  pagination: false,
  autoplay: true,
  interval: 3700,
  arrows: false,
  pauseOnHover:true
} );




splide.mount();
