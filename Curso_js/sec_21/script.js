const conteudo = (nome,tipo) => {
    const msg = '#'.repeat(3) + ' ' +  nome +  ' ' + '#'.repeat(3);
    if(tipo == 1){
        console.log( msg);
    }else{
        console.log('//'+msg);
    }
}

conteudo('Promisse', 1);
const promessa = Promise.resolve(1+1);

console.log('cod');
promessa.then(value => {
    console.log('dois é a promessa =  ' + value);
});
console.log('antes da promessa')
conteudo('Promisse', 2);

conteudo('Promisse Fail', 1);
Promise.resolve(4 * 'asd')
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error('Valores invalidos')
    }
})
.catch((err)=> console.log('Um error ocorreu '+err))
conteudo('Promisse Fail', 2);

conteudo('Rejeição', 1);
function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n > 10){
            resolve('O número é maior que 10')
        }else{
            reject('Número muito baixo')
        }
    })
}
const a = checkNumber(20)
const b = checkNumber(10)
console.log(a,b)
conteudo('Rejeição', 2);

conteudo('Resolve Promises', 1);
const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 3000);
})

const p2 = Promise.resolve(10+10);

const p3 = new Promise((resolve,reject)=>{
   if(30 > 10){
    resolve(30)
   }else{
    reject("error")
   }
})

Promise.all([p1,p2,p3]).then((values)=> console.log(values));

conteudo('Resolve Promises', 2);



conteudo('async function', 1);
async function somarComDelay(a,b) {
    return a+b; 
}

somarComDelay(2,4).then((value) => {
    console.log('O valor da Soma é ', value)
})

conteudo('async function', 2);


conteudo('async await', 1);
function resolveComDelay() {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve("Resolveu a promise")
        }, 2000)
    })
}

async function chamadaAsync(){
    console.log('Chamando a promise e esperado o resultado');
    const result = await resolveComDelay(); 
    console.log("O resultado chegou : " + result)
}
chamadaAsync();
conteudo('async await', 2);
