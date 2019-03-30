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
        const selectedItem = e.target.closest('li').classList.value;
        var id = selectedItem.slice(4);

    }
    const top = document.getElementById(id).offsetTop;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
    nav.classList.remove('navigation__nav--active');
    burger.classList.remove('navigation__icon--active');
})

// SERVICES SECTION SLIDERS

const slider = document.querySelectorAll('.services__slider');
const servWrap = document.querySelectorAll('.services__wrapper');



for (let i = 0; i < servWrap.length; i++) {
    servWrap[i].addEventListener('click', function () {
        slider[i].classList.toggle('services__slider--active');
    });
};

// SHOW MORE GALLERY 

const btnGallery = document.querySelector('.btn--gallery');
const galleryWrap = document.querySelector('.gallery__wrapper');

btnGallery.addEventListener('click', function () {
    galleryWrap.classList.toggle('gallery__wrapper--active');
    btnGallery.classList.toggle('hidden');
    if (!btnGallery.classList.contains('hidden')) {
        btnGallery.textContent = 'show more';
    } else {
        btnGallery.textContent = 'show less';
    }
    btnGallery.style.textDecoration = 'uppercase';
});