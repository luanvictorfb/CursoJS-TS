// Factory functions
function criaPessoa(nome, sobrenome ,altura ,peso){
    return{
        nome,sobrenome,
        
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada.'){
            return `${this.nome} está ${assunto}`;
        },
        
        altura,peso,

        get imc(){
            return (this.peso / (this.altura**2)).toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luan', 'Victor', 1.70, 75);
p1.nomeCompleto = 'Yasmin Lopes Gomes';
console.log(p1.nomeCompleto);
console.log(p1.imc)