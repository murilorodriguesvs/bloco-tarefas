function deletarTarefa(){
    const deletarBtn = document.createElement('button');

    deletarBtn.classList.add('delete-button');
    deletarBtn.innerText = 'Excluir';

    deletarBtn.addEventListener('click', function(evento){
        const tarefaDeletar = evento.target;
        const tarefaDeletada = tarefaDeletar.parentElement;
        tarefaDeletada.remove();

        return tarefaDeletar;
    });

    return deletarBtn;
};

export default deletarTarefa;