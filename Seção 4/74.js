// IIFE - Immediately invoked funtion expression
(function(idade, peso , altura){
    
    const sobrenome = "Victor";
    
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luan'));
    }

    falaNome()
    console.log(idade,peso,altura);

})(22, 70, 1.70);