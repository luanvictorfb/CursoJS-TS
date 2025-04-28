const form = document.getElementById("form");

function eventoForm(evento){
    evento.preventDefault();
    const peso = Number(document.getElementById("input-peso").value);
    const altura = parseFloat(document.getElementById("input-altura").value);
    const resp = document.getElementById("res");

    const imc = peso/(altura*altura);

    let condicao = '';

    if(imc <= 18.5){
        condicao = 'Abaixo do peso';
    } else if(imc>=18.5 && imc<=24.99){
        condicao = 'Peso Normal';
    } else if (imc>=25 && imc<=29.99){
        condicao = 'Sobrepeso';
    } else if (imc>=30 && imc<=34.99){
        condicao = 'Obesidade grau 1';
    } else if (imc>=35 && imc<=39.99){
        condicao = 'Obesidade grau 2';
    } else {
        condicao = 'Obesidade grau 3';  
    }

    resp.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${condicao})`;
    resp.setAttribute('style','background-color: green; padding: 10px');
}
form.addEventListener('submit', eventoForm);
// Seu imc é ${IMC} (Nivel segundo tabela)
// peso e altura = null no if
// imc peso/(altura*altura) 