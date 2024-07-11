"use strict";
//Com o strict ele aponta error ao não declarar o tipo de variável, por exemplo
const conteudo = (nome,tipo) => {
    const msg = '#'.repeat(3) + ' ' +  nome +  ' ' + '#'.repeat(3);
    if(tipo == 1){
        console.log( msg);
    }else{
        console.log('//'+msg);
    }
}
conteudo('strict', 1);

// a = "Strinct error, por não declarar o tipo de variável"; 
const a = "sem error no strict";

conteudo('strict', 2);


conteudo('debugger', 1);

console.log('aa');
let b = 1; 
let c =3;

//Descomentar o debugger
// debugger;

for (let i = 1; i<=10 ; i++){

}
// debugger;

for (let j = 1; j<=10 ; j++){

}
conteudo('debugger', 2);


conteudo('exception', 1);

let x = 10; 
// x = 11; 
if(x > 10 ){
    throw new Error("O Valor de x Não pode ser maior do que 10");
}
conteudo('exception', 2);


conteudo('try/catch', 1);
try{
    const soma = x+y; 
}catch(er){
    console.log('error no programa ' + er)
}
conteudo('try/catch', 2);


conteudo('finally', 1);
try{
    const soma = x+aa; 
}catch(er){
    console.log('error no programa ' + er)
}finally{
    console.log('Finally')
}
conteudo('finally', 2);