function retornaHr(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleString('pt-BR', { timeStyle: 'short' });
}

try {
    const hora = retornaHr();
    console.log(hora);
} catch (error) {
    console.log(error)
} finally { 
    console.log('Tenha um bom dia');
}

