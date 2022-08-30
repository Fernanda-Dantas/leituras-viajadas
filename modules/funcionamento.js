export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // array
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number); // array
    
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();
    
    // Verificar se está aberto
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1] )
    
    if (semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }    
}



