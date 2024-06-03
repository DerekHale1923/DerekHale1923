
const header = document.querySelector('.header')
const burger = document.querySelector('.burger')
const closeMenuHeader = document.querySelector('.header-nav-close')
const headerLogo = document.querySelector('.header-logo')
let nav = document.querySelector('.header-nav')


window.onscroll = function () {
    if(window.scrollY > 50) {
        header.classList.add('header-active')
    } else {
        header.classList.remove('header-active')

    }
}

function toggleNavList() {
    nav.classList.toggle('header-nav-active')
}

burger.addEventListener('click', toggleNavList)

closeMenuHeader.addEventListener('click',toggleNavList)

headerLogo.addEventListener('click', (e) => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})


    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight + 20;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.scrollY;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                nav.classList.remove('header-nav-active')
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };

    scrollTo();