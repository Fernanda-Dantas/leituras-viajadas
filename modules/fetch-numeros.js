import AnimaNumeros from './anima-numeros.js';

export default function initNumerosApi() {     
    function createNumero(numero) {
        const div = document.createElement('div');
        div.classList.add('numero-livro');

        div.innerHTML = `<h3>${numero.specie}</h3><span data-numero>${numero.total}</span>`

        return div;
    }
      
    async function fetchNumeros(url) {
        try{
            const numerosResponse = await fetch(url);
            const numerosJSON = await numerosResponse.json();
            const numerosGrid = document.querySelector('.numeros-grid');

            numerosJSON.forEach(numero => {
            const divNumero = createNumero(numero)
            numerosGrid.appendChild(divNumero);
            });
            const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
            animaNumeros.init(); // inicia depois que o fetch acontece
        } catch(erro){
            console.log(erro)
        }
    }

    fetchNumeros('./numerosapi.json');
}
