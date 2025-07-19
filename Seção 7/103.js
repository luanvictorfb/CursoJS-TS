class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(val) {
    val = val.split(" ");
    this.nome = val.shift();
    this.sobrenome = val.join(" ");
  }
}

const p1 = new Pessoa("Luan", "Victor");
p1.nomeCompleto = "Luan Victor";
console.log(p1.nome);
console.log(p1.sobrenome);

// const _velocidade = Symbol('velocidade');
// class Carro {
//     constructor(nome){
//         this.nome = nome;
//         this[_velocidade] = 0;
//     }

//     set velocidade(val){
//         if(typeof val !== 'number') return;
//         if(val > 100 || val < 0 ) return;
//         this[_velocidade] = val;
//     }

//     get velocidade(){
//         return this[_velocidade];
//     }

//     acelerar(){
//         if(this[_velocidade] >= 100) return
//         this[_velocidade]++;
//     }

//     freiar(){
//         if(this[_velocidade] <= 0) return
//         this[_velocidade]--;
//     }
// }

// const c1 = new Carro('Fusca',0);
// c1.velocidade = 55;
// console.log(c1.velocidade);
