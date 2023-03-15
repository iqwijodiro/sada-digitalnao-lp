
function windowScroll() {
    const navbar = document.querySelector('#navbar');
    // const offTop = ;
    // const offSetTop = ;
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add('nav-sticky');
    } else {
        navbar.classList.remove('nav-sticky');
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll()
})