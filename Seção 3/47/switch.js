function getDiaSemanatxt (diaSemana) {
    let diaSemanaTxt;
    switch(diaSemana){
    case 0:
        diaSemanaTxt = 'Domingo';
        return diaSemanaTxt;
    case 1:
        diaSemanaTxt = 'Segunda';
        return diaSemanaTxt;
    case 2:
        diaSemanaTxt = 'Terça';
        return diaSemanaTxt;
    case 3:
        diaSemanaTxt = 'Quarta';
        return diaSemanaTxt;
    case 4:
        diaSemanaTxt = 'Quinta';
        return diaSemanaTxt;
    case 5:
        diaSemanaTxt = 'Sexta';
        return diaSemanaTxt;
    case 6:
        diaSemanaTxt = 'Sabado';
        return diaSemanaTxt;
    default:
        diaSemanaTxt = 'Dia da semana inválido!!!';
        return diaSemanaTxt;
    }
}

const data = new Date('1987-04-22 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTxt = getDiaSemanatxt(diaSemana);


console.log(diaSemana + ', ' + diaSemanaTxt);