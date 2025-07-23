function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, temp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('Msg precisa ser uma string'));
                return;
            }
            if (typeof temp !== 'number') {
                reject(new Error('temp precisa ser um number'))
                return;
            };
            resolve(msg.toUpperCase());
        }, temp)
    });
}

// Promise.all  Promise.race Promise.resolve Promise.reject
function baixaPag() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a pag', 3000);
    }
}

baixaPag().then(dadosPag => console.log(dadosPag)).catch(e => console.log('Error', e))