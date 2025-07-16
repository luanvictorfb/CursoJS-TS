const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return
        this[_velocidade]++;
    }
    
    freiar(){
        if(this[_velocidade] <= 0) return
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca',0);

for(let i = 0 ; i < 60 ; i++){
    c1.acelerar();
}

c1.velocidade = 2000;
console.log(c1);
