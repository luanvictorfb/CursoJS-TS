const num = Number(prompt('Digite seu número:'));
const numT = document.getElementById('numT');
const txt = document.querySelector('main p');

numT.innerHTML = num;
txt.innerHTML = `Raiz quadrada: ${Math.sqrt(num)}<br>${num} é um número inteiro? ${Number.isInteger(num)}<br>É NaN:${Number.isNaN(num)}<br>Arredondando pra baixo:${Math.floor(num)}<br>Arredondamento para cima: ${Math.ceil(num)}<br>Com duas casas decimais:${num.toFixed(2)}`;  