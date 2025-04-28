// const tresHoras = 60*60*3*1000;
// const umDia = 60*60*24*1000;
// const data = new Date(0 + umDia + tresHoras ); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019,18,3) // Formatação (Ano, Mês ,Dia, Horas, Minutos, Segundos, Milisegundos)
// console.log(data.toString());

// const data = new Date() 
// console.log('Dia' , data.getDate());
// console.log('Mês' , data.getMonth() + 1);
// console.log('Ano' , data.getFullYear());
// console.log('Hora' , data.getHours());
// console.log('Min' , data.getMinutes());
// console.log('Seg' , data.getSeconds());
// console.log('ms' , data.getMilliseconds());
// console.log('Dia semana' , data.getDay() + 1);
// console.log(data.toString());
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}` 
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil); 