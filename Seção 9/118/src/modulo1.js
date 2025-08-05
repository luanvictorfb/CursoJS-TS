export { nome, sobrenome, idade, soma };


const nome = 'Luan';
const sobrenome = 'Victor';
const idade = 22
const cpf = 1231123123;

function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}