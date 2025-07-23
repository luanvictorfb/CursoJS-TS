function randomNumber(min = 0, max = 3) {
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

async function execute() {
    try {
        const fase1 = await esperaAi('Fase 1', randomNumber());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', randomNumber());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', randomNumber());
        console.log(fase3);

        console.log('Acabou!!');
    } catch (e) {
        console.log('Erro', e)
    }

}

execute()

// Pending, Fullfilled , Reject















// esperaAi('Fase 1', randomNumber())
//     .then(val => {
//         console.log(val)
//         return esperaAi('Fase 2', randomNumber())
//     }).then(val => {
//         console.log(val);
//         return esperaAi('Fase 3', randomNumber())
//     }).then(val => console.log(val))
//     .catch(e => console.log(e));