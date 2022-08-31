/* Toggle button */

function ready() {
    let repair_block__toggle = true;
    let repair_block__toggleButton = document.querySelector('.repair_block__toggle-button');

    repair_block__toggleButton.addEventListener( "click" , () => {
        let repair_block__list = document.querySelector('.repair_block__list');

        if(repair_block__toggle) {
            repair_block__list.style.height = 'auto';
            repair_block__toggleButton.innerHTML = 'Скрыть';
            repair_block__toggleButton.style.backgroundImage = '../images/close_icon.svg';
        } else {
            repair_block__list.style.height = '200px';
            repair_block__toggleButton.innerHTML = 'Показать все';
            repair_block__toggleButton.style.backgroundImage = '../images/expand.svg';
        }

        repair_block__toggle = !repair_block__toggle;
    });
}

document.addEventListener("DOMContentLoaded", ready);