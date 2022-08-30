export default function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const classeAtivar = 'ativar';
    function ativaAccordion() {
        this.classList.toggle(classeAtivar)
        this.nextElementSibling.classList.toggle(classeAtivar);
    }
    if(accordionList.length){
        accordionList[0].classList.add(classeAtivar)
        accordionList[0].nextElementSibling.classList.add(classeAtivar)

        accordionList.forEach((evento) => {
            evento.addEventListener('click', ativaAccordion)
        })
    }
}
