const express = require('express');
const app = express();


// CRUD -> Create, Read, Update, Delete
//         Post    Get   Put      Delete

//http://meusite.com/ <- GET -> Entregue a página /
//http://meusite.com/sobre <- GET -> Entregue a página /sobre
//http://meusite.com/contato <- GET -> Entregue a página /contato



app.get('/', (req, resp) => {
    resp.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>ENVIAR FORMULÁRIO</button>
        </form>`);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, resp) => {
    resp.send('Obrigado por entrar em contato com a gente!')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});