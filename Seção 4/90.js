// defineProperty - defineProperties
function Produto(nome,preco,estoque){
    Object.defineProperty(this , 'estoque' , {
        enumerable: true, // Mostra a chave quando true
        value: estoque, // Valor da chave
        writable: false,  // Pode ser alterado quando true
        configurable: false // configurável ou reconfigurável quando true
    });
    Object.defineProperties(this, {
        nome:{
            enumerable: true, // Mostra a chave quando true
            value: nome, // Valor da chave
            writable: false,  // Pode ser alterado quando true
            configurable: false
        },
        preco:{
            enumerable: true, // Mostra a chave quando true
            value: preco, // Valor da chave
            writable: false,  // Pode ser alterado quando true
            configurable: false
        }
    });
}
const produto1 = new Produto('Doritos', 19.99 , 200);
produto1.estoque = 500;
delete produto1.estoque;
console.log(produto1)