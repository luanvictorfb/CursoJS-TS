const pessoa = {
    nome: 'Luan',
    sobrenome: 'Victor',
    idade: 22,
    endereco: {
        rua: 'Rua Santa Francisca',
        numero: 253
    }
};

// Atribuição via desestruturação
const { nome, sobrenome,  ...resto } = pessoa;
console.log( nome, sobrenome ,resto);