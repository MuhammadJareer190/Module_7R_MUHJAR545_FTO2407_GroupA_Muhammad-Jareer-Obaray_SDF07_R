const navToggle = documen.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav__link')

navToggle.andEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nac-open');
    })
})