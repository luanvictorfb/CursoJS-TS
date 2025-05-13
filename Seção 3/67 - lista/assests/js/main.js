const inputTarefa = document.querySelector('.inputTarefa');
const btnTarefa = document.querySelector('button');
const tarefas = document.querySelector('.tarefas');



btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

});

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

document.addEventListener('click' , function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.setAttribute('class','fade-out');
        el.parentElement.addEventListener('animationend', () => {
            el.parentElement.remove();
            salvarTarefa();
        }, { once: true });
    }
});


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaLi() {
    const li = document.createElement('li'); 
    li.setAttribute('class', 'fade-in')
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvarTarefa();
}

function criaBotaoApagar(li){
    li.innerHTML += '  ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listadeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar' , '').trim();
        listadeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listadeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();