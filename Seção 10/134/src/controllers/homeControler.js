exports.pagInicial = (req, res) => {
    res.render('index.ejs');
}

exports.trataPost = (req, res) => {
    res.send('<h1>Sou sua nova rota de POST.</h1>')
};