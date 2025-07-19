// filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.
// FILTRAR O ARRAY!

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// // function callbackFilter(valor){
// //     return valor > 10; 
// // }

// let numMaior10 = numeros.filter(valor => valor >= 50);
// console.log(numMaior10);

// for (let i=0; i<numeros.length; i++) {
//     if(numeros[i]>10){
//         numMaior10.push(numeros[i]);
//     }
// }

const pessoas = [{nome:'Luan',idade: 22},
    {nome:'Yasmin',idade:23},
    {nome:'Pietro',idade:22},
    {nome:'Juan',idade:18},
    {nome:'Doralice',idade:45},
    {nome:'Ruan',idade:22},
    {nome:'Coradi',idade:22}
];

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);