document.addEventListener('click', function (e) {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPag(el);
    }
});

async function carregaPag(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if (response.status !== 200) throw new Error('erro')
        const html = await response.text();
        carregaResultado(html)
    } catch (e) {
        console.error(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


