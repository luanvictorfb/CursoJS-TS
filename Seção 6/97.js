// Classe pai
function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(val){
    if(this.saldo < val) {
        console.log(`Saldo insuficiente! Saldo Atual: R$${this.saldo}`)
        return;
    }
    this.saldo -= val;
    this.verSaldo();
};
Conta.prototype.depositar = function(val){
    this.saldo += val
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia} / ${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
};

function CC(agencia,conta,saldo,limite){
    Conta.call(this, agencia,conta,saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(val){
    if((this.saldo + this.limite) < val) {
        console.log(`Saldo insuficiente! Saldo Atual: R$${this.saldo}`)
        return;
    }
    this.saldo -= val;
    this.verSaldo();
};

function CP(agencia,conta,saldo){
    Conta.call(this, agencia,conta,saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc1 = new CC(1,1,0,100);
cc1.depositar(10);
cc1.sacar(110);

console.log('');

const cp = new CP(2,2,0)
cp.depositar(10);
cp.sacar(110);