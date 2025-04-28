// Condição ? True : False 

const pontuacaoUsuario = 100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario  || 'Preta';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 100) {
//     console.log('Usuário Vip');
// } else {
//     console.log('Usuário normal');
// }

