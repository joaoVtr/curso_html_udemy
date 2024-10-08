const conteudo = (nome,tipo) => {
    const msg = '#'.repeat(3) + ' ' +  nome +  ' ' + '#'.repeat(3);
    if(tipo == 1){
        console.log( msg);
    }else{
        console.log('//'+msg);
    }
}
