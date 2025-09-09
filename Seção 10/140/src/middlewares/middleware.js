module.exports = (req, res, next) => {

    if (req.body.cliente) {
        console.log(`\nVi que você postou ${req.body.cliente}\n`);
    }
    
    next();
}