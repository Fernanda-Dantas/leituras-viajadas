import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/init-accordion.js';
import initTabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/initTooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initNumerosApi from './modules/fetch-numeros.js';



const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initNumerosApi();


const contato = document.querySelector('#contato');
const dados = {}


function handleChange(event) {
    console.log(dados)
    dados[event.target.name] = event.target.value
}

contato.addEventListener('change', handleChange)



