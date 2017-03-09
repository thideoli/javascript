'use strict';

//Função contrutora
var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};
console.log(new Pessoa('Thiago', 27));
console.log(new Pessoa('Aline', 21));

//Função fabrica
var criarCarro = function (marca, modelo) {
    return {
        marca: marca,
        modelo: modelo
    };
};
console.log(criarCarro('Fiat', 'Uno'));
console.log(criarCarro('Chevrolet', 'Onix'));