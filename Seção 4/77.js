// Função Construtora retorna objetos e Fabric Tbm
// Na função Contrutora -> Nome iniciando em letra maiuscula / Pessoa (new)

function Pessoa(nome,sobrenome){
    const ID = 123456;

    const metodoInterno = () => {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome}: Sou um metodo`);
    }
} 

const p1 = new Pessoa('Luan', 'Victor');
const p2 = new Pessoa('Yasmin','Lopes');

console.log(p1.nome , p2.nome);
p2.metodo();