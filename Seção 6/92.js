const produto = {nome: 'Caneta', preco: 1.80, material: 'Plástico'};


for(let valor of Object.entries(produto)){
    console.log(valor[0],valor[1]);
}