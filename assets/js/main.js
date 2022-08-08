/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i= 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
// import Swiper from 'swiper-bundle.esm.js';
// import '../assets/swiper-bundle.css';
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// var btn = document.getElementById('btn');
// btn.addEventListener('click', function(e){
//     e.preventDefault()
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;
//     var body = 'name' + name + '<br/> email: ' + email + '<br/> message' + message + subject
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "antonhuge2020@gmail.com",
//         Password : "exwkzhgyshcixgtu",
//         To : 'antonhuge2020@gmail.com',
//         From : email,
//         Subject : subject,
//         Body : body
//     }).then(
//       message => alert(message)
//     );
// })

// function SendMail(){
//     var params = {
//         full_name : document.getElementById('full_name').value,
//         email_id : document.getElementById('email_id').value,
//         message : document.getElementById('message').value
//     }
//     emailjs.send('service_lf1ys0b','template_0k2dvm5',params)
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//      }, function(error) {
//         console.log('FAILED...', error);
//      });
// }

// submitHandler 
function sendEmail(e) {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    const nameError = document.querySelector('#name_error');
    const emailError = document.querySelector('#email_error');
    const messageError = document.querySelector('#message_error');

    const success = document.querySelector('#message_success');

    nameError.classList.remove('show_error');
    emailError.classList.remove('show_error');
    messageError.classList.remove('show_error');

    success.classList.remove('show_success');
    
    if(name === '' || email === '' ||  message === '') {
        if(name === '') {
            nameError.classList.add('show_error');
            nameError.innerText = "Name is required";
        }
        if(email === '') {
            emailError.classList.add('show_error');
            emailError.innerText = "Email is required";
        }
        if(message === '') {
            messageError.classList.add('show_error');
            messageError.innerText = "Message is required";
        }
    } 
    
    else {
        const params = {
            from_name: name,
            from_gmail: email,
            message
        };

        emailjs.send('service_lf1ys0b', 'template_0k2dvm5', params)
        .then((res) => {
            success.classList.add('show_success');
            success.innerText = "Mail sent successfully";

            setTimeout(() => success.classList.remove('show_success') , 3000);

            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#message').value = '';
        }).catch(err => {
            success.classList.add('show_error');
            success.innerText = "Error occured. Try again later";
            setTimeout(() => success.classList.remove('show_error') , 3000);
        })
    }
}
document.querySelector('.contact__form').addEventListener('submit', sendEmail);