
document.getElementById("bienvenueBtn").addEventListener("click", function() {
    this.classList.add("shake");
    setTimeout(() => {
        this.classList.remove("shake");
    }, 500);
});

let menuIcon = document.querySelector('#menu-icon');
let navbara = document.querySelector('.navval');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbara.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
            sec.classList.add('show-animate');
        }  
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100 );
     
    
    menuIcon.classList.remove('bx-x');
    navbara.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}
   // Sélection du lien de contact dans la navigation
   const contactLink = document.querySelector('.navval a[href="#contact"]');
   const skillsLink = document.querySelector('.navval a[href="#skills"]');
   // Sélection du footer
   const footer = document.querySelector('footer.contact');

   // Fonction pour détecter si l'utilisateur est dans le footer
   function isInFooter() {
       const footerRect = footer.getBoundingClientRect();
       return (
           footerRect.top <= (window.innerHeight || document.documentElement.clientHeight)
       );
   }

   // Fonction pour mettre en bleu ou en blanc le lien de contact en fonction de la position de l'utilisateur
   function updateContactLinkColor() {
       if (isInFooter()) {
           contactLink.style.color = '#3399c2';
           contactLink.classList.add('active')
           skillsLink.classList.remove('active');
         
       } else {
           contactLink.style.color = 'white';
       }
   }

   // Écouteur d'événement pour mettre à jour la couleur du lien lors du défilement
   window.addEventListener('scroll', updateContactLinkColor);

   // Appel initial pour définir la couleur correcte au chargement de la page
   updateContactLinkColor();



