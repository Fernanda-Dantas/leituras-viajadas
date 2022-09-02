import AnimaNumeros from './anima-numeros.js';
export default function fetchNumeros(url, target) {     
        // cria a div contendo infos com o total de números
        function createNumero(numero) {
            const div = document.createElement('div');
            div.classList.add('numero-livro');
            div.innerHTML = `<h3>${numero.specie}</h3><span data-numero>${numero.total}</span>`
            return div;
        }

        // preenche cada seção no DOM
        const numerosGrid = document.querySelector(target);
        function preencheNumeros(numero) {
            const divNumero = createNumero(numero)
            numerosGrid.appendChild(divNumero);
        }

        // anima os números em cada seção
        function animaNumerosSecao() {
            const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
            animaNumeros.init(); // inicia depois que o fetch acontece
        }

      // puxa os animais através do arquivo json
      //e cria cada animal utilizand createNumero
        async function criarNumeros() {
            try{
                // faz o fetch, espera a resposta e transforma em JSON
                const numerosResponse = await fetch(url);
                const numerosJSON = await numerosResponse.json();

                // após o processo de JSON, ativa as funções para preencher e animar
                // os números da seção
                numerosJSON.forEach(numero => preencheNumeros(numero));
                animaNumerosSecao();
            } catch(erro){
                console.log(erro)
            }
        }

        return criarNumeros();

}
