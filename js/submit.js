

/*
    Получить кнопку
    Добавить обработчик события клик
    открыть модальное окно
    сохранить состояние
*/
let submitWindowOpenState = false; // окно Оствить заявку закрыто по умолчанию
let checkRepairWindowOpenState = false; // окно Оствить заявку закрыто по умолчанию

const submitBtn = document.querySelector('.submit-btn');
const submitBtnsBlock = document.querySelector('.submit-block-btns');

const modalWindowSudmit = document.querySelector('.modal-window--submit');
const modalWindowCheckRepair = document.querySelector('.modal-window--check-repair');
const modalWindows =  Array.from(document.getElementsByClassName('modal-window'));

const modalBackground = document.querySelector('.modal');

submitBtnsBlock.addEventListener('click', (event) => {
    if(event?.target?.classList.contains('submit-btn')) {
        //Отобразить окно "Заполнить заявку"
        //Отобразить модальное окно
        
        modalWindowSudmit.classList.add('modal-window--active');
        modalWindowSudmit.classList.remove('modal-window--inactive');
        modalBackground.classList.add('modal-active');
        /*
        if(!submitWindowOpenState ) {
            modalWindowSudmit.classList.add('modal-window--active');
            modalWindowSudmit.classList.remove('modal-window--inactive');
            modalBackground.classList.add('modal-active');
        } else {
            modalWindowSudmit.classList.add('modal-window--inactive');
            modalWindowSudmit.classList.remove('modal-window--active');
            modalBackground.classList.remove('modal-active');
        }

        submitWindowOpenState = !submitWindowOpenState;
        */
    }

    if(event?.target?.classList.contains('check-repair-status-btn')) {
        //Отобразить окно "Проверить статус"
        //Отобразить модальное окно

       
        modalWindowCheckRepair.classList.add('modal-window--active');
        modalWindowCheckRepair.classList.remove('modal-window--inactive');
        modalBackground.classList.add('modal-active');

        /*
        if(!checkRepairWindowOpenState ) {
            modalWindowCheckRepair.classList.add('modal-window--active');
            modalWindowCheckRepair.classList.remove('modal-window--inactive');
            modalBackground.classList.add('modal-active');
        } else {
            modalWindowCheckRepair.classList.add('modal-window--inactive');
            modalWindowCheckRepair.classList.remove('modal-window--active');
            modalBackground.classList.remove('modal-active');
        }

        checkRepairWindowOpenState = !checkRepairWindowOpenState;
        */
       
    }
});

modalWindows.map((modalWindow) => {
    modalWindow.addEventListener('click', (event) => {
        if(event?.target?.classList.contains('modal-window__close-btn')) {
            modalWindow.classList.remove('modal-window--active');
            modalWindow.classList.add('modal-window--inactive');
            modalBackground.classList.remove('modal-active');
        }
    });
});
