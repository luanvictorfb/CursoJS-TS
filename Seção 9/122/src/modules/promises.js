const { resolve } = require("core-js/features/promise");

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello, im promise');
            resolve();
        }, 2000)
    });
}

export default async function exec() {
    await promise();
    console.log('Terminou');
} 