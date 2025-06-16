function Calculadora(){
    this.display = document.querySelector(".display");

    this.inicia = () => {
        this.clickButtons();
        this.pressEnter();
    }

    this.clickButtons = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            e.preventDefault();

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.delOne();
            if (el.classList.contains('btn-eq')) this.showResult();                    
            
        });
    }

    this.pressEnter = () => {
        this.display.addEventListener('keydown', e => {
            if(e.key === 'Enter'){
                e.preventDefault();
                this.showResult(); 
            }
        });   
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value='';

    this.delOne = () => this.display.value = this.display.value.slice(0,-1);


    this.showResult = () => {
        try {
            conta = eval(this.display.value);
            if(!conta){
                alert("Conta inválida");
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert("Conta inválida");
            return;
        }
    };

}

const calc = new Calculadora();
calc.inicia();