/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
document.querySelector('.button').addEventListener('click', function() {
    // Construct the URL to directly download the file
    var fileUrl = 'https://drive.google.com/uc?export=download&id=1hTU5r0p77KmFN6ziAYR9hqGL05zJTgIo';
    
    // Create a temporary anchor element
    var tempAnchor = document.createElement('a');
    tempAnchor.href = fileUrl;
    tempAnchor.setAttribute('download', 'resume.pdf');
    
    // Append the anchor element to the body
    document.body.appendChild(tempAnchor);
    
    // Programmatically trigger a click event on the anchor element
    tempAnchor.click();
    
    // Remove the temporary anchor element from the body
    document.body.removeChild(tempAnchor);
});

// Create elements for email and location
const emailElement = document.createElement('p');
const locationElement = document.createElement('p');

// Set innerHTML to include symbols
emailElement.innerHTML = `Email: <span class="symbol">&#x2709;</span> joycechidiadi@gmail.com`;
locationElement.innerHTML = `Location: <span class="symbol">&#x1F4CD;</span> Calgary, Alberta, Canada`;

// Append elements to the document body or any desired container
document.body.appendChild(emailElement);
document.body.appendChild(locationElement);

