'use strict';

var criarContador = function () {
    var valor = 0;
    return {
        add: function () {
            ++valor;
        },
        getValor: function () {
            return valor;
        }
    };
};

var contador = criarContador();
console.log(contador.getValor());
contador.add();
console.log(contador.getValor());


var Contador = function () {
    var valor = 0;
    this.add = function () {
        ++valor;
    };
    this.getValor = function () {
        return valor;
    };
};

var contador2 = new Contador();
console.log(contador2.getValor());
contador2.add();
console.log(contador2.getValor());