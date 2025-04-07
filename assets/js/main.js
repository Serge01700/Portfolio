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


// ----------- NAVBAR   
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-top li');
  
  // Définir les correspondances entre les items de menu et les sections
  const sections = {
      'Hey': 'header',
      'Work': 'my-latest-project',
      'Story': 'about-me',
      'Chat': 'personal-skill'
  };
  
  // Ajouter des événements de clic à chaque élément de navigation
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          // Récupérer le texte de l'élément cliqué
          const sectionName = this.textContent;
          
          // Trouver la section correspondante
          const targetId = sections[sectionName];
          const targetSection = document.getElementById(targetId) || document.querySelector(targetId);
          
          if (targetSection) {
              // Faire défiler jusqu'à la section
              targetSection.scrollIntoView({ behavior: 'smooth' });
              
              // Mettre à jour la classe active
              navItems.forEach(navItem => {
                  // Réinitialiser tous les styles (vous pouvez ajuster selon vos besoins)
                  navItem.style.padding = '';
                  navItem.style.color = '';
                  navItem.style.borderRadius = '';
                  navItem.style.backgroundColor = '';
              });
              
              // Appliquer le style actif à l'élément cliqué
              this.style.padding = '5px';
              this.style.color = '#32329e';
              this.style.borderRadius = '15px';
              this.style.backgroundColor = '#a290f4';
          }
      });
  });
  
  // Fonction pour mettre à jour la navigation pendant le défilement
  function updateNavOnScroll() {
      // Obtenir la position de défilement actuelle
      const scrollPosition = window.scrollY;
      
      // Vérifier quelle section est actuellement visible
      for (const [navText, sectionId] of Object.entries(sections)) {
          const section = document.getElementById(sectionId) || document.querySelector(sectionId);
          
          if (section) {
              const sectionTop = section.offsetTop - 100; // Ajustez selon votre design
              const sectionBottom = sectionTop + section.offsetHeight;
              
              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                  // Trouver l'élément de navigation correspondant
                  const activeNavItem = Array.from(navItems).find(item => item.textContent === navText);
                  
                  if (activeNavItem) {
                      // Réinitialiser tous les styles
                      navItems.forEach(navItem => {
                          navItem.style.padding = '';
                          navItem.style.color = '';
                          navItem.style.borderRadius = '';
                          navItem.style.backgroundColor = '';
                      });
                      
                      // Appliquer le style actif
                      activeNavItem.style.padding = '5px';
                      activeNavItem.style.color = '#32329e';
                      activeNavItem.style.borderRadius = '15px';
                      activeNavItem.style.backgroundColor = '#a290f4';
                  }
                  
                  break;
              }
          }
      }
  }
  
  // Ajouter l'événement de défilement pour mettre à jour la navigation
  window.addEventListener('scroll', updateNavOnScroll);
  
  // Exécuter une fois au chargement pour définir l'état initial
  updateNavOnScroll();
});document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner tous les éléments de la barre de navigation
  const navItems = document.querySelectorAll('.nav-top li');
  
  // Définir les correspondances entre les items de menu et les sections
  const sections = {
      'Hey': 'header',
      'Work': 'my-latest-project',
      'Story': 'about-me',
      'Chat': 'personal-skill'
  };
  
  // Ajouter des événements de clic à chaque élément de navigation
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          // Récupérer le texte de l'élément cliqué
          const sectionName = this.textContent;
          
          // Trouver la section correspondante
          const targetId = sections[sectionName];
          const targetSection = document.getElementById(targetId) || document.querySelector(targetId);
          
          if (targetSection) {
              // Faire défiler jusqu'à la section
              targetSection.scrollIntoView({ behavior: 'smooth' });
              
              // Mettre à jour la classe active
              navItems.forEach(navItem => {
                  // Réinitialiser tous les styles (vous pouvez ajuster selon vos besoins)
                  navItem.style.padding = '';
                  navItem.style.color = '';
                  navItem.style.borderRadius = '';
                  navItem.style.backgroundColor = '';
              });
              
              // Appliquer le style actif à l'élément cliqué
              this.style.padding = '5px';
              this.style.color = '#32329e';
              this.style.borderRadius = '15px';
              this.style.backgroundColor = '#a290f4';
          }
      });
  });
  
  // Fonction pour mettre à jour la navigation pendant le défilement
  function updateNavOnScroll() {
      // Obtenir la position de défilement actuelle
      const scrollPosition = window.scrollY;
      
      // Vérifier quelle section est actuellement visible
      for (const [navText, sectionId] of Object.entries(sections)) {
          const section = document.getElementById(sectionId) || document.querySelector(sectionId);
          
          if (section) {
              const sectionTop = section.offsetTop - 100; // Ajustez selon votre design
              const sectionBottom = sectionTop + section.offsetHeight;
              
              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                  // Trouver l'élément de navigation correspondant
                  const activeNavItem = Array.from(navItems).find(item => item.textContent === navText);
                  
                  if (activeNavItem) {
                      // Réinitialiser tous les styles
                      navItems.forEach(navItem => {
                          navItem.style.padding = '';
                          navItem.style.color = '';
                          navItem.style.borderRadius = '';
                          navItem.style.backgroundColor = '';
                      });
                      
                      // Appliquer le style actif
                      activeNavItem.style.padding = '5px';
                      activeNavItem.style.color = '#32329e';
                      activeNavItem.style.borderRadius = '15px';
                      activeNavItem.style.backgroundColor = '#a290f4';
                  }
                  
                  break;
              }
          }
      }
  }
  
  // Ajouter l'événement de défilement pour mettre à jour la navigation
  window.addEventListener('scroll', updateNavOnScroll);
  
  // Exécuter une fois au chargement pour définir l'état initial
  updateNavOnScroll();
});