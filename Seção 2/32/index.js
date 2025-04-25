const pessoa1 = {
    nome: 'Luan',
    sobrenome: 'Victor',
    idade: 22,

    fala(){
        console.log(`A minha idade é ${this.idade}.`)
    },
    increIdade(){
        this.idade++
    }
};
pessoa1.fala();
pessoa1.increIdade();
pessoa1.fala();
pessoa1.increIdade();
pessoa1.fala();
pessoa1.increIdade();
pessoa1.fala();