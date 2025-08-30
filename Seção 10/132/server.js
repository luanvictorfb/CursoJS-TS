const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST">
        Nome: <input type="text" name="nome">    
        <button>Enviar formulário</button>
        </form>
    `)
});

app.get('/testes', (req, res) => {
    res.send(`
        <h1>Sem ID</h1>
        <p>Query params: ${JSON.stringify(req.query)}</p>
    `);
});

app.get('/testes/:idUsers', (req, res) => {
    res.send(`
        <h1>ID recebido: ${req.params.idUsers}</h1>
        <p>Query params: ${JSON.stringify(req.query)}</p>
    `);
});

app.get('/testes/:idUsers/:parametro', (req, res) => {
    res.send(`
        <h1>ID recebido: ${req.params.idUsers}</h1>
        <h2>Parametro: ${req.params.parametro}</h2>
        <p>Query params: ${JSON.stringify(req.query)}</p>
    `);
});


app.get('/testes/:idUsers/:parametro', (req, res) => {
    res.send(`ID recebido: ${req.params.idUsers}`);
    res.send(`${req.query}`);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Oque você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});