function meuEscopo(){
    const form = document.querySelector('.form');
    const res = document.getElementById('res');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector("#inome");    
        const sobrenome = form.querySelector("#isobrenome");    
        const peso = form.querySelector("#ipeso");    
        const altura = form.querySelector("#ialtura");
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        res.innerHTML += `${nome.value} ${sobrenome.value}, ${peso.value} e ${altura.value}<br>`;    
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();