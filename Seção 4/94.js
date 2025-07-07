function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(value){
    this.preco = this.preco - (this.preco * (value / 100));
}
Produto.prototype.aumento = function(value){
    this.preco = this.preco + (this.preco * (value / 100));
}

const p1 = new Produto('Camisa', 19.99);

const p2 = {
    nome: 'Caneca',
    preco: 14.99
}
Object.setPrototypeOf(p2 , Produto.prototype)

const p3 = Object.create(Produto.prototype,{ 
    preco: {
        value: 12,
        writable:true,
        configurable:true,
        enumerable:true
    },
    tamanho2: {
        value: 12,
        writable:true,
        configurable:true,
        enumerable:true
    }

});

console.log(p3);






// // new Object => Object.prototype
// const objA = {
//     chaveA: 'A',
//     // __proto__: Object.prototype
// };
// const objB = {
//     chaveB: 'B',
//     // __proto__: Object.prototype
// };

// const objC = new Object();
// objC.chaveC = 'C';


// Object.setPrototypeOf(objB,objA);
// Object.setPrototypeOf(objC,objB);
// console.log(objC.chaveC);
