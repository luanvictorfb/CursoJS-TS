// 705.484.450-52  070.987.720-03
/*
PRIMEIRO NUMEROS

(MULTIPLICAR EM UMA CONTAGEM REGRASSIVA DE 10 A 2 OS NUMEROS DO CPF DA ESQUERDA PARA A DIREITA)

(SOMA DO RESULTADOS DA MULTIPLICAÇÃO % 11 = ?) - 11
SE O DIGITO FOR MAIOR QUE 9, É CONSIDERAMOS 0.

SEGUNDO NUMERO

(MULTIPLICAR EM UMA CONTAGEM REGRASSIVA DE 11 A 2 OS NUMEROS DO CPF DA ESQUERDA PARA A DIREITA COLOCANDO O PRIMEIRO DIGITO ENCONTRADO NA CONTA)

(SOMA DO RESULTADOS DA MULTIPLICAÇÃO % 11 = ?) - 11
SE O DIGITO FOR MAIOR QUE 9, É CONSIDERAMOS 0.
*/
function Validacpf(cpf){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpf.replace(/\D+/g, '');
        }
    });
}

Validacpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === undefined) return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criadigito(cpfParcial);
    const digito2 = this.criadigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}
Validacpf.prototype.criadigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length+1;
    let total = cpfArray.reduce((ac,val) => {
        ac += (Number(val)*regressivo);
        regressivo--;
        return ac;
    },0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

Validacpf.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf = new Validacpf('023.044.766-00');
if(cpf.valida()){
    console.log('Cpf válido');
} else {
    console.log('cpf inválido')
}
