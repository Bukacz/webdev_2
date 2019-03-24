// MENU 
const burger = document.querySelector(".navigation__icon");
const nav = document.querySelector(".navigation__nav");
burger.addEventListener('click', (e) => {
    burger.classList.toggle('navigation__icon--active');
    nav.classList.toggle('navigation__nav--active');
});

/* PREVENT F****ING ANCHOR JUMPING TO THE TOP OF THE PAGE WHICH TOOK ME 
    TOO MUCH TIME TO REALISE WHY MY SCROLL DOESN'T WORK... FFFUUUUUUU
*/

const anchor = document.querySelectorAll('a');
for (let i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener('click', (e) => {
        e.preventDefault();
    });
};


// JUMP TO SECTION 
const list = document.querySelector('.navigation__list');
list.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
        var id = e.target.closest('li').classList;
        console.log(`id z a $(id)`);
    }
    const top = document.getElementById(id).offsetTop;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
    nav.classList.remove('navigation__nav--active');
    burger.classList.remove('navigation__icon--active');
})