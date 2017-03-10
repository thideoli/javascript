'use strict';

var criarContador = function () {
    var _valor = 0;
    return {
        add: function () {
            ++_valor;
        },
        getValor: function () {
            return _valor;
        }
    };
};

var contador = criarContador();
console.log(contador.getValor());
contador.add();
console.log(contador.getValor());

//---

var Contador = function () {
    var _valor = 0;
    this.add = function () {
        ++_valor;
    };
    this.getValor = function () {
        return _valor;
    };
};

var contador2 = new Contador();
console.log(contador2.getValor());
contador2.add();
console.log(contador2.getValor());

//--- Module Pattern | Revealing Module Pattern

var somador = (function () {
    var _valor = 0;
    var _add = function () {
        ++_valor;
    };
    var _getValor = function () {
        return _valor;
    };
    return {
        add: _add,
        getValor: _getValor
    };
})();

console.log(somador.getValor());
somador.add();
console.log(somador.getValor());