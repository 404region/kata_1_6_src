
//menu-btn

/*
    Сохранить состояние кнопки (menuOpen)

    Получить кнопку menu-btn из html, добавить листенер собыития клик
    Получить блок меню (.aside) и отобразить его или скрыть исходя из состояния

*/
//Состояние
let menuOpenState = false;
let bigScreen = false;


const menuBtn =  document.querySelector('.menu-btn');
const menuBlock = document.querySelector('.aside');
const modalBackground = document.querySelector('.modal');

menuBtn.addEventListener('click', function(event) {
    //вызвать функцию сделать хорошо
    openMenuFunc();
});

//if(window.innerWidth < '768') {

function openMenuFunc() {
    if(menuOpenState) {
        //меню уже открыто - скрыть меню
        //menuBlock.style.display = 'none';
        menuBtn.classList.remove('menu-btn--state-close');
        menuBtn.classList.add('menu-btn--state-open');
        menuBlock.classList.remove('aside--open');
        modalBackground.classList.remove('modal-active');

    } else {
        //меню закрыто - отобразить меню
        //menuBlock.style.display = 'block';
        menuBtn.classList.add('menu-btn--state-close');
        menuBtn.classList.remove('menu-btn--state-open');
        menuBlock.classList.add('aside--open');
        modalBackground.classList.add('modal-active');
    }
    //изменить состояние
    menuOpenState = !menuOpenState;
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth >= '1440') {
        bigScreen = true;
        //вызвать функцию - отобразить меню слева
    } else {
        bigScreen = false;
        //вызвать функцию - скрыть меню слева
    }
}, true);

function showLeftAside() {
    
}
