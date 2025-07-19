// const pessoa = {
//     nome:'Luan',
//     sobrenome: 'Victor',
// };
// const chave = 'sobrenome'
// // console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Luan';
// pessoa1.sobrenome = 'Victor';
// pessoa1.idade = 22;
// pessoa1.falarNome = function() {
//     console.log(`Meu nome é ${this.nome}`)
// }
// pessoa1.getYearBirthday = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// for(let chave in pessoa1){
//     console.log(pessoa1[chave])
// }

// Factury functions / Constructor functions / Classes

// function criaPessoa(nome,sobrenome){
//     return{
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }

// const p1 = criaPessoa('Luan','Victor');
// console.log(p1.nomeCompleto);

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

const p1 = new Pessoa('Luan','Victor');
console.log(p1)