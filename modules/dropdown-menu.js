import outsideClick from './outsideclick.js';

export default class DropDownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);
        
        // define os argumentos padrões de events
        // caso o usurário não defina
        if (events === undefined) {
            this.events = ['touchstart', 'click'];
        } else {
            this.events = events;
        }

        this.activeClass = 'ativo';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }   

    // ativa o dropdown menu e add a função 
    // que observa o click fora dele
    activeDropdownMenu(event) {
        const element = event.currentTarget;
        event.preventDefault();
        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    }

    // add os eventos ao dropdownmenu 
    addDropDownEvents() {
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            })
        
        });
    }

    init() {
        if(this.dropdownMenus.length) {
            this.addDropDownEvents();
        }
            return this;
    }
}


