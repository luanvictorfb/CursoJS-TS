const numeros = [1,2,3,4,5,6,7,8,9];

for( let numero of numeros){
    if(numero%2===1){
        continue
    }
    console.log(numero)
    if(numero === 6){
        break
    }
}