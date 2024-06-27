// Rest operator
console.log('Rest Operator');

const somaInfinita = (...args) => {
    let total = 0; 

    for(let i=0; i<args.length; i++){
        total+=args[i];
    }
    return total; 

}


console.log(somaInfinita(1,2,3,4)); 


console.log('/Rest Operator');

console.log('For Of');

const somaInfinitaForOf = (...args) => {
    let total = 0; 

    for(i of args){
        total += i;
    }
    return total; 

}
console.log(somaInfinitaForOf(1,2,3,4)); 

console.log('/For Of');


console.log('Destructuring obj');

const user = {
    nome: "João",
    idade: 26
}

const {nome, idade} = user;
console.log(nome, idade);

const {nome: nomeJ,idade: idadeJ } = user;
console.log(nomeJ, idadeJ);

console.log('/Destructuring obj');


console.log('Destructuring arr');

const myList = ["avião", "carro", "submarino"];

const [a,b,c] = myList;
console.log(a,b,c);
 
console.log('/Destructuring arr');