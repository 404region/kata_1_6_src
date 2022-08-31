import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

let swiperClassesArr = [
    {find: '.prices-grid__row', delete:'swiper-slide'},
    {find: '.prices-grid__swiper-wrapper', delete:'swiper-wrapper'},
    {find: '.swiper-container-prices', delete:'swiper-container'},
    {find: '.repair-types__slider', delete:'swiper-container-2'},
    {find: '.repair-types__wrapper', delete:'swiper-wrapper'},
    {find: '.repair-types__slide-item', delete:'swiper-slide'},
];


window.addEventListener('resize', function(event) {
    if(window.innerWidth < '768') {
        addSwiper();
        addSwiperRepairTypes();
        addSwiperPrices();
        addSwiperClasses(swiperClassesArr);
    } else {
        deleteSwiperClasses(swiperClassesArr);
    }
}, true);

if(window.innerWidth < '768') {
    addSwiper();
    addSwiperRepairTypes();
    addSwiperPrices();
    addSwiperClasses(swiperClassesArr);
} else {
    deleteSwiperClasses(swiperClassesArr);
}

function addSwiper() {
    const slider =  document.querySelector('.swiper-container');

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        grabCursor: true,
        mousewheel: {
            sensitivity: 1,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        }
    });
}

function addSwiperRepairTypes() {
    const slider =  document.querySelector('.swiper-container-2');

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        mousewheel: {
            sensitivity: 1,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        }
    });
}

//prices
function addSwiperPrices() {
    const slider =  document.querySelector('.swiper-container-prices');

    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        grabCursor: true,
        mousewheel: {
            sensitivity: 1,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        }
    });
}

function deleteSwiperClasses(swiperClassesArr) {
    swiperClassesArr.map(item => {
        let findDivsArr = document.querySelector(item.find) || [];

        if(typeof(findDivsArr) === 'Array') {
            findDivsArr.map(findedDiv => {
                findedDiv.classList.remove(item.delete);
            });
        } else {
            let findedDiv = findDivsArr;
            findedDiv.classList.remove(item.delete);
        }
    });
}

function addSwiperClasses(swiperClassesArr) {
    swiperClassesArr.map(item => {
        let findDivsArr = document.querySelector(item.find) || [];

        if(typeof(findDivsArr) === 'Array') {
            findDivsArr.map(findedDiv => {
                findedDiv.classList.add(item.delete);
            });
        } else {
            let findedDiv = findDivsArr;
            findedDiv.classList.add(item.delete);
        }
    });
}
