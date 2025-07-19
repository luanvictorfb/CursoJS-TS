// 705.484.450-52  070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpfEnviado = cpfEnviado;

        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            enumerable: true,
            configurable: false,
            writable: false,
        });
    }

    eSquencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
    }

    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;
        for (let i of cpfParcial) {
            total += reverso * Number(i);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSquencia()) return false;
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;
    }
}

// const validaCPF = new ValidaCPF('070.987.720-03');
// console.log(validaCPF.valida())

// if (validaCPF.valida()) {
//     console.log(`${validaCPF.cpfEnviado} - CPF válido.`)
// } else {
//     console.log(`${validaCPF.cpfEnviado} - CPF inválido.`)
// }