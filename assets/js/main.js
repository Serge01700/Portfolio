document.addEventListener('DOMContentLoaded', function() {
    let splide = new Splide('.splide', {
      direction: 'ttb',
      perPage: 2, 
      height: '750px',
      wheel: true,
      type: 'loop',
      pagination: false,
      autoplay: true,
      interval: 4700,
      arrows: false,
      pauseOnHover:true
    });
  
    splide.mount();
  })


  // REDIRECTION ---------------------- 

  
const btnProject = document.querySelector('#dernier-projet');
const lastProject = document.querySelector('.contain-project');
const more = document.querySelector('#savoir-plus');
const aboutMe = document.querySelector('#about-me');

btnProject.addEventListener('click', ()=> {
  lastProject.scrollIntoView({behavior: 'smooth', block: 'start'})
})
  
more.addEventListener('click', () => {
  aboutMe.scrollIntoView({behavior: 'smooth', block: 'start'});
})


