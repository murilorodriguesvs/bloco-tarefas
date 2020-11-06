function concluirTarefa(){
    const concluirBtn = document.createElement('button');// cria botão concluir
    
    concluirBtn.classList.add('check-button');
    concluirBtn.innerHTML = '&#x2714'

    concluirBtn.addEventListener('click', function(evento){
        const concluir = evento.target;//Seleciona alvo do evento
        const tarefaConcluida = concluir.parentElement; //Adiciona ao elemento pai do do alvo
        tarefaConcluida.classList.toggle('done');//Adiciona efeito;
    });

    return concluirBtn;
}

export default concluirTarefa;