class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('form')
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkFields = this.checkFields();
        const senhasValidas = this.validaSenha();

        if(checkFields & senhasValidas){
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    checkFields() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.createError(campo, `Campo "${label}" não pode estar em branco`)
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaSenha(){
        let valid = true
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirSenha');

        if(senha.value.length > 12 || senha.value.length < 6){
            this.createError(senha, 'Senha precisa ter entre 6 a 12 caracteres.');
            valid = false;
        }

        if(senha.value !== repetirSenha.value){
            this.createError(senha,'Campos "Senha" e "Repetir Senha precisam ser iguais."');
            this.createError(repetirSenha,'Campos "Senha" e "Repetir Senha precisam ser iguais."');
            valid = false;
        }
        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length > 12 || usuario.length < 3){
            this.createError(campo, 'Usuario precisa ter entre 3 a 12 caracteres.' );
            valid = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)){
            this.createError(campo, 'Nome de usuario precisa ter e/ou letras ou numeros.' );
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.createError(campo, 'CPF inválido.'); 
            return false;
        }
        return true;
    }

    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}
const valida = new ValidaFormulario();