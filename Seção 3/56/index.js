const nome = ['Luan', 'Victor' , 'Juan'];

for(let i = 0 ; i<nome.length;i++){
    console.log(nome[i]);
}
console.log("------------");

for(let i in nome){
    console.log(nome[i]);
}
console.log("------------");

for(let i of nome){
    console.log(i);
}
console.log("------------");
