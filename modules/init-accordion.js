export default class Accordion {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.classeAtivar = 'ativar';
    }
        
    toggleAccordion(evento) {
        evento.classList.toggle(this.classeAtivar)
        evento.nextElementSibling.classList.toggle(this.classeAtivar);
    }

    addAccordionEvent() {
        this.accordionList.forEach((evento) => {
            evento.addEventListener('click', () => this.toggleAccordion(evento));
        });
    }

    init() {
        if(this.accordionList.length) {
            this.toggleAccordion(this.accordionList[0]);
            this.addAccordionEvent();
        }
    }
}
