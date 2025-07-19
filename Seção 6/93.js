function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
Pessoa.prototype.estouAqui = 'KKKK';

// instância
const pessoa1 = new Pessoa('Luan', 'Victor');
const pessoa2 = new Pessoa('Yasmin', 'Lopes');
const data = new Date();

console.dir(pessoa1);
console.dir(data);