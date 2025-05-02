const relogio = document.querySelector('p');
let segundos = 0;
let timer;

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.style.color = 'black';
        iniciarRelogio();
    }
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.style.color = 'red';
    }
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        relogio.style.color = 'black';
    }
});

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleString('pt-BR', { timeStyle: 'medium', timeZone: 'GMT' });
}