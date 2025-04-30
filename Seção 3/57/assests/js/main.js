const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor = bgColorBody;
    p.style.padding = '10px';
    p.style.borderRadius = '16px';
    p.style.color = 'white';
}