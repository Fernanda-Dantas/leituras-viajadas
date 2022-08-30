import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {

    const dropdownMenu = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('ativo');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativo');
        });
    }

    dropdownMenu.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        })
    
    });
}


