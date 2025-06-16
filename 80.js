function* geradora1(){
    // Código qualquer...
    yield 'Valor1';
    // Código qualquer...
    yield 'Valor2';
    // Código qualquer...
    yield 'Valor3';
}


function* contador(){
    let i = 0;
    
    while(true){
        yield i;
        i++;
    }
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

// const g4 = geradora4();
// for(let i of g4){
//     console.log(i)
// }

function* geradora5(){
    yield function() {
        console.log('Vim de y1');
    }

    yield function(){
        console.log('Vim do return');
    }

    yield function(){
        console.log('Vim de y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();