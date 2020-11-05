import deletarTarefa from './controller/deletarTarefa.js'
import concluirTarefa from './controller/concluirTarefa.js';

//Variáveis para adicionar;
const adicionarBtn = document.querySelector('[data-form-button]');
const adicionarInput = document.querySelector('[data-form-input]');
const adicionarLista = document.querySelector('[data-list]');

adicionarBtn.addEventListener('click', adicionarTarefa);

function adicionarTarefa(evento){
    evento.preventDefault();//Anula comportamento padrão do browser
    //Busca valor do input;
    const valorInput = adicionarInput.value;

    const item = document.createElement('li');//Cria a li
    item.classList.add('task');//Adiciona a classe na li
    item.innerHTML = `<p class="content">${valorInput}<\p>`;//Aplica o conteúdo na li
    
    item.appendChild(concluirTarefa());
    item.appendChild(deletarTarefa());
    adicionarLista.appendChild(item);//Adiciona a li como filha da ul

    adicionarInput.value = '';
}
