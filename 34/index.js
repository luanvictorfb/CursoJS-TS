


function salvareMostrar(){
    const nome = document.getElementById('inome'); 
    const sobrenome = document.getElementById('isobrenome');
    const peso = document.getElementById('ipeso'); 
    const altura = document.getElementById('ialtura'); 
    const res = document.getElementById('res'); 
    
    const dados = [{nome, sobrenome, peso, altura}];
    res.innerHTML += `${dados[length]}`;
}