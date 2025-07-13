const pessoas = [
    {id:3 ,nome: 'Luan'},
    {id:2, nome:'Yasmin'},
    {id:1, nome:'Dora'},
];

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id,{...pessoa});
}
console.log(novasPessoas)



// const novasPessoas = {};
// for(const pessoa of pessoas){
//     const {id} = pessoa
//     novasPessoas[id] = {...pessoa};
// }