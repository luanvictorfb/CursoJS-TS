const path = require("path");
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)

    dados.forEach(valor => console.log(valor));
}


const dadosArquivo = lerArquivo(caminhoArquivo)


// const pessoas = [
//     {
//         nome: "Maria",
//         idade: 30,
//         email: "maria@example.com"
//     },
//     {
//         nome: "João",
//         idade: 25,
//         email: "joao@example.com"
//     },
//     {
//         nome: "Ana",
//         idade: 35,
//         email: "ana@example.com"
//     },
//     {
//         nome: "Luan",
//         idade: 22,
//         email: "luan@example.com"
//     }
// ];

// const json = JSON.stringify(pessoas, "", 2);
// escreve(caminhoArquivo, json);