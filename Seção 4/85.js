// MAP-> Sempre retornar um array, com a mesma quantidade de elementos.
// MAP -> MUDA OS VALORES DO ARRAY PARA UM NOVO ARRAY

// Dobre os numeros
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const dobroNum = numeros.map( valor => valor*2 );
// console.log(dobroNum); 


const pessoas = [{nome:'Luan',idade: 22},
    {nome:'Yasmin',idade:23},
    {nome:'Pietro',idade:22},
    {nome:'Juan',idade:18},
    {nome:'Doralice',idade:45},
    {nome:'Ruan',idade:22},
    {nome:'Coradi',idade:22}
];

const apenasNome = pessoas.map(valor => valor.nome);
const semNome = pessoas.map(obj => obj.idade);
const idPessoa = pessoas.map(function(obj,indice){
    const newObject = {...obj};
    newObject.Id = indice + 1;
    return newObject;
});
console.log(pessoas);