const popup = document.querySelectorAll('.popup'),
    form = document.querySelector('.popup__form'),
    wrap = document.querySelector('.wrap'),
    cardInfo = document.querySelector('.card__info-bg'),
    menu = document.querySelector('.header__navigation-content'),
    menuContent = document.querySelector('.header__navigation-menu'),
    menuBtn = document.querySelector('.menu-mob-btn'),
    topMap = document.querySelector('.header__top-map'),
    topForm = document.querySelector('.header__top-form'),
    topContact = document.querySelector('.header__top-contact'),
    showMap = document.querySelector('.show-map');

popup.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        let target = event.target;
        if (target.matches('.close, .popup-overlay')) {
            elem.classList.remove('active');
        }
    })
})

wrap.addEventListener('click', (event) => {
    let target = event.target;
    if (target.matches('.form__about, .form-icon, .header-form__content') || target.matches('.get-card__text-content, .get-card-top, .branch')) {
        popup[0].classList.add('active');
    }
    if (target.matches('.menu-mob-btn')) {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    popup[0].classList.remove('active');
    popup[1].classList.add('active');
})

wrap.addEventListener('mouseover', (event) => {
    let target = event.target;
    if (target.matches('.map-info__view, .map')) {
        showMap.classList.add('active');
    } else if (target.matches('.card-info, .card-info-img')) {
        cardInfo.classList.add('active');
    } else {
        showMap.classList.remove('active');
        cardInfo.classList.remove('active');
        return;
    }
})

let windowSize = window.innerWidth;
if (windowSize <= 1050) {
    menuContent.appendChild(topMap);
    menuContent.appendChild(topContact);
}
if (windowSize <= 450) {
    menuContent.appendChild(topForm);
}
if (windowSize <= 850) {
    wrap.style.width = window.outerWidth + 'px';
    wrap.style.cssText = 'overflow-x: hidden;';
}