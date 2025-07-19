// REDUCE -> REDUZIR O ARRAY A UM UNICO RETORNO.

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const soma = numeros.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
}, 0);
const pares = numeros.filter(valor => valor%2===0);
const dobro = numeros.map(valor => valor*2);

// console.log(soma, pares, dobro);

const pessoas = [{nome:'Luan',idade: 22},
    {nome:'Yasmin',idade:23},
    {nome:'Pietro',idade:22},
    {nome:'Juan',idade:18},
    {nome:'Doralice',idade:45},
    {nome:'Ruan',idade:22},
    {nome:'Coradi',idade:22}
];

const olderPerson = pessoas.reduce(function(acumulador,obj){
    if(acumulador.idade < obj.idade) acumulador = obj;
    return acumulador;
});
console.log(olderPerson) 