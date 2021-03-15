/*=====Scroll Home Animation======*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})
sr.reveal('.home_title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home_img', {delay:400})
sr.reveal('.home_social-icon', {interval:200})

/*=====Scroll About Animation======*/

sr.reveal('.about_img', {})
sr.reveal('.about_subtitle', {delay:200})
sr.reveal('.about_text', {delay:400})

/*=====Scroll skills  Animation======*/

sr.reveal('.skills_subltitle', {})
sr.reveal('.skills_text', {delay:200})
sr.reveal('.skills_data', {interval:200})
sr.reveal('.skills_img', {delay:400})

/*=====Scroll works  Animation======*/
sr.reveal('.card', {interval:200})
sr.reveal('.contact-icon', {interval:200})

sr.reveal('.work_img', {interval:200})

/*=====Scroll works  Animation======*/

sr.reveal('.contact_input', {interval:200})

