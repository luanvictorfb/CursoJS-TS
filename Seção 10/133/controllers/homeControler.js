exports.pagInicial = (req, res) => {
    res.send(`
        <form method="POST">
        Nome: <input type="text" name="nome">    
        <button>Enviar formulário</button>
        </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('<h1>Sou sua nova rota de POST.</h1>')
};