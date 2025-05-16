function criaCalculadora(){
    return{
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        inicia: function(){
            this.clickButtons();
            this.pressEnter();
        },

        clickButtons(){
            document.addEventListener('click', (e) => {
                const el = e.target;
                e.preventDefault();

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                } else if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                } else if (el.classList.contains('btn-del')){
                    this.delOne();
                } else if (el.classList.contains('btn-eq')){
                    this.showResult();                    
                }

            });
        },

        delOne(){
            this.display.value = this.display.value.slice(0,-1)
        },

        btnParaDisplay(valor){
            this.display.value += valor;

        },
        clearDisplay(){
            this.display.value='';
        },
        showResult(){
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta){
                    alert("Conta inválida");
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert("Conta inválida");
                return;
            }
        },
        pressEnter(){
            this.display.addEventListener('keyup', (e)=> {
                if(e.keyCode === 13){
                    this.showResult(); 
                }
            });   
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();