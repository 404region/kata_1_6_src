/* Toggle button */

function ready() {
    let repair_types_block__toggle = true;
    let repair_types_block__toggleButton = document.querySelector('.repair-types__toggle-button');

    repair_types_block__toggleButton.addEventListener( "click" , () => {
        let repair_types_block__list = document.querySelector('.repair-types__wrapper');

        if(repair_types_block__toggle) {
            repair_types_block__list.style.height = 'auto';
            repair_types_block__toggleButton.innerHTML = 'Скрыть';
            repair_types_block__toggleButton.style.backgroundImage = '../images/close_icon.svg';
        } else {
            repair_types_block__list.style.height = '180px';
            repair_types_block__toggleButton.innerHTML = 'Показать все';
            repair_types_block__toggleButton.style.backgroundImage = '../images/expand.svg';
        }

        repair_types_block__toggle = !repair_types_block__toggle;
    });
}

document.addEventListener("DOMContentLoaded", ready);