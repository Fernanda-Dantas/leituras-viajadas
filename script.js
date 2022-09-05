import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/init-accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/initTooltip.js';
import DropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchNumeros from './modules/fetch-numeros.js';
import ScrollAnima from './modules/scroll-anima.js';



const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const tabnav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropDownMenu('[data-dropdown]');
dropdownMenu.initt();


initMenuMobile();
initFuncionamento();

fetchNumeros('../numerosapi.json', '.numeros-grid');


const contato = document.querySelector('#contato');
const dados = {}


function handleChange(event) {
    console.log(dados)
    dados[event.target.name] = event.target.value
}

contato.addEventListener('change', handleChange);



