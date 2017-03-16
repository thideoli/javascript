var homem = {
    sexo: "masculino"
};

var pedro = {
    nome: "Pedro",
    idade: 18,
    __proto__: homem
}

console.log(pedro);
console.log(pedro.sexo);



var joao = {
    nome: "João",
    idade: 20,
}

Object.setPrototypeOf(joao, homem);

console.log(joao);
console.log(joao.sexo); 



var marcos = Object.create(homem);
marcos.nome = "Marcos";
marcos.idade = 13; 

console.log(marcos);
console.log(marcos.sexo);