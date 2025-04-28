const body = document.querySelector('body');

function mostrarData() {
    const data = new Date();
    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const h1 = document.querySelector('h1');

    const diaSemanaTxt = getDiaSemanaTxt(diaSemana);
    const mesTxt = getMesTxt(mes);

    h1.innerHTML = `${diaSemanaTxt}, ${dia} de ${mesTxt} de ${ano}<br>${hora}:${min < 10 ? '0' + min : min}`;
}

function getDiaSemanaTxt(diaSemana) {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return dias[diaSemana] || 'Dia inválido';
}

function getMesTxt(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mes] || 'Mês inválido';
}

window.addEventListener('load', mostrarData);
