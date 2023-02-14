const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

const triggers = document.querySelectorAll('.trigger');
console.log(triggers)
const background = document.querySelector('.dropdownBackground');

function handleEnter() {
    // console.log('enter');
    this.classList.add('trigger-enter');
    setTimeout(() => {
        //only add if trigger enter is active
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
    }, 150);
    background.classList.add('open');

    //dropdown
    console.log(this)
    const dropdown = this.querySelector('.dropdown');
    console.log(dropdown)
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px ,${coords.top}px)`);
};

function handleLeave() {
    // console.log('leave');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
};

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

window.addEventListener('scroll', fixNav);