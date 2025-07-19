// Produto -> aumento, desconto
// Camiseta = cor , Caneta = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){ this.preco = this.preco + (this.preco *(valor/100))};
Produto.prototype.desconto = function(valor){ this.preco = this.preco - (this.preco *(valor/100))};

function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome,preco, cor, material,estoque){
    Camiseta.call(this, nome,preco, cor);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Generico',10);
const camiseta = new Camiseta('Moletom', 120, 'Preto', 5);
const caneca = new Caneca('Melhor mãe do mundo', 19.99 , 'Branco' , 'Porcelanato' );
camiseta.aumento(100);
console.log(produto);
console.log(camiseta);
console.log(caneca);