import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.inputQtd');
const chkMaiusculas = document.querySelector('#chk-maiusculas');
const chkMinusculas = document.querySelector('#chk-minusculas');
const chkNumeros = document.querySelector('#chk-numeros');
const chkSimbolos = document.querySelector('#chk-simbolos');
const buttomGerarSenha = document.querySelector('.gerarSenha');

export default () => {
    buttomGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada selecionado';
}