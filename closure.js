'use strict';

var ola = function () {
    var mensagem = "Olá";
    return function () {
        return mensagem;
    };
};

var fnOla = ola();
console.log(fnOla());