let toggleBtn = document.getElementById('read-more-toggle-btn');
let toggleBlock = document.getElementById('toggle-text-block');
let toggleBlockOpen = true;


toggleBtn.addEventListener('click', () => {
    toggleBlock.style.maxHeight = (toggleBlockOpen) ? 'initial' : '90px';
    toggleBlockOpen = !toggleBlockOpen;
});