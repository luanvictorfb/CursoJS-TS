const verdadeira = true;

//let tem escopo de bloco {...bloco}
// Var so tem escopo de função

let nome = 'luan';
var nome2 = 'luan';

var nome2 = 'otavio';


if(verdadeira){
    let nome = 'otávio';
    
    console.log(nome,nome2);

    if(verdadeira){
        nome = 'juan';
    }
}