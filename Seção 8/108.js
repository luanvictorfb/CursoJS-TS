function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, temp) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERRO'));
        setTimeout(() => {
            resolve(msg);
        }, temp)
    });
}

esperaAi('CONEXÃO COM A BASE DE DADOS', randomNumber(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', randomNumber(1, 3))
    })
    .then(resp => {
        console.log(resp);
        return esperaAi(2222, randomNumber(1, 3));
    })
    .then(resp => {
        console.log(resp);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => console.log( 'Erro' , e));


