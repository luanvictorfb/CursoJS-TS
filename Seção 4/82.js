const nomes = ['Luan', 'Pietro', 'Yasmin', 'Juan', 'Coradi'];


// FUNÇÃO SPLICE() 

// nomes.splice('!Qual indice que eu quero começar a mexer', '!Quantos elementos eu quero remover', 'Elementos que quero adicionar');

const removidos = nomes.splice(0 , 0 , 'Pedrin'  );
console.log(nomes , removidos);