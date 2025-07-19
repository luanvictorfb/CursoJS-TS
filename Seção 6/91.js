function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePriv =  estoque;

    Object.defineProperty(this , 'estoque' , {
        enumerable: true, // Mostra a chave quando true
        configurable: false, // configurável ou reconfigurável quando true

        get: function(){
            return estoquePriv;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem');
            }

            estoquePriv = valor;
        }
    });

    
}
const p1 = new Produto('Camiseta', 19.90 , 50);
// console.log(p1);
p1.estoque = 49;
console.log(p1.estoque);
