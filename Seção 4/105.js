class ControleRemoto{
    constructor(tvModelo){
        this.tvModelo = tvModelo;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }


    static trocaPilha(){
        console.log('ok, trocando pilhas.')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);