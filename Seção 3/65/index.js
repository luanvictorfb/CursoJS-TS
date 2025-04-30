function mostraHora(){
    let data = new Date();

    return data.toLocaleString('pt-BR' , {timeStyle: 'full'});
}

function funcaodoIntervalo(){
    console.log(mostraHora());
}

const timer = setInterval(function () { console.log(mostraHora()); }, 1000);

setTimeout(function() {
    clearInterval(timer);
},4000);
setTimeout(function() {
    console.log('Olá Mundo');
},5000);