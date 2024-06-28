const conteudo = (nome,tipo) => {
    const msg = '#'.repeat(3) + ' ' +  nome +  ' ' + '#'.repeat(3);
    if(tipo == 1){
        console.log( msg);
    }else{
        console.log('//'+msg);
    }
}

//Métodos
const obj = {
    nome : "João",
    teste : ()=>{
        console.log('testeee')
    }

}

obj.teste();
//-Metodos

// 2 - aprofundando em métodos
conteudo('Mais Métodos', 1);
const pessoa = {
    nome: "João",
  
    getNome: function () {
      return this.nome;
    },
  
    setNome: function (novoNome) {
      this.nome = novoNome;
    },
  };
  
console.log(pessoa.nome);
  
pessoa.setNome("João Vitor");
console.log(pessoa.getNome());
console.log(pessoa.nome); 
conteudo('Mais Métodos', 2);

conteudo('Prototipe', 1); 

const text = "texto"; 
console.log(Object.getPrototypeOf(text)); 

const bool = true; 
console.log(Object.getPrototypeOf(bool)); 

const myObj = {
    a: 'b'
}

const myObj2 = Object.create((myObj));
console.log(myObj2)

conteudo('Prototipe', 2); 


conteudo('classes básicas', 1);
const cachorro = {
    raca:null
};
const pastorAlemao = Object.create(cachorro); 
pastorAlemao.raca = "Pastor Alemão"; 
console.log(pastorAlemao);
conteudo('classes básicas', 2); 


conteudo('9 - classes es6', 1); 
// 9 - classes es6
class CachorroClasse {
    constructor(nome, raca) {
      this.nome = nome;
      this.raca = raca;
    }
  }
  
  const jeff = new CachorroClasse("Jeff", "Labrador");
  
  console.log(jeff);
  
  console.log(Object.getPrototypeOf(jeff));
  conteudo('9 - classes es6', 2); 

  conteudo('10 - mais sobre classes', 1); 

  // 10 - mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
      this.eixos = eixos;
      this.cor = cor;
    }
  
    descreverCaminhao() {
      console.log(
        `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}.`
      );
    }
  }
  
  const scania = new Caminhao(6, "Vermelha");
  
  scania.descreverCaminhao();
  
  Caminhao.motor = 4.0;
  
  const c2 = new Caminhao(4, "Preta");
  
  // Motor é undefined
  console.log(c2.motor);
  
  Caminhao.prototype.motor = 4.0;
  
  const c3 = new Caminhao(6, "Azul");
  
  console.log(c3.motor);
  conteudo('10 - mais sobre classes', 2); 

  conteudo('11- override por prototype', 1); 
  // 11 - override por prototype
class Humano {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  const matheus = new Humano("Matheus", 31);
  
  console.log(matheus);
  
  Humano.prototype.idade = "Não definida";
  
  console.log(matheus.idade);
  console.log(Humano.prototype.idade);
  conteudo('11 - override por prototype', 2);

  conteudo('12 - symbol', 1);

  // 12 - symbol
class Aviao {
    constructor(marca, turbinas) {
      this.marca = marca;
      this.turbinas = turbinas;
    }
  }
  
  const asas = Symbol();
  
  Aviao.prototype[asas] = 2;
  
  const boeing = new Aviao("Boeing", 10);
  
  console.log(boeing);
  
  console.log(boeing[asas]);
  
  console.log(Aviao.prototype[asas]);
  conteudo('12 - symbol', 2);


  conteudo('13 - getter e setter', 1);
  // 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.tags = tags;
    }
  
    get exibirTitulo() {
      return `Você está lendo: ${this.titulo}`;
    }
  
    set adicionarTags(tags) {
      const tagsArray = tags.split(", ");
      this.tags = tagsArray;
    }
  }
  
  const myPost = new Post("Algum post", "É um post sobre programação");
  
  console.log(myPost.exibirTitulo);
  
  myPost.adicionarTags = "programacao, javascript, js";
  
  console.log(myPost);
  conteudo('13 - getter e setter', 2);

  conteudo('14 - herança', 1);
  // 14 - Herança
class Mamifero {
    constructor(patas) {
      this.patas = patas;
    }
  }
  
  class Lobo extends Mamifero {
    constructor(patas, nome) {
      super(patas);
      this.nome = nome;
    }
  }
  
  const shark = new Lobo(4, "Shark");
  
  console.log(shark);
  conteudo('14 - herança', 2);