//-- Passo 1
var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log("Passo 1");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 2
var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log("Passo 2");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 3
var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";
console.log("Passo 3");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 4
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(12) 3939-1499";
console.log("Passo 4");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 5
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(12) 9766-2346";
console.log("Passo 5");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 6
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone = "(12) 99766-2346";
console.log("Passo 6");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 7
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone = "(12) 997662346";
console.log("Passo 7");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 8
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
var telefone = "<table><tr><td>(12) 997662346</td><td>(12) 99724-9614</td><td>(12) 3939-1499</td></tr></table>";
console.log("Passo 8");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 9
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;
var telefone = "<table><tr><td>(12) 997662346</td><td>(12) 99724-9614</td><td>(12) 3939-1499</td></tr></table>";
console.log("Passo 9");
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

//-- Passo 10
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
var telefone = "<table><tr><td>(12) 997662346</td><td>(12) 99724-9614</td><td>(12) 3939-1499</td></tr></table>";
console.log("Passo 10");
console.log(telefone.match(regExp));

//-- Passo 11
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = "<table><tr><td>(12) 997662346</td><td>(12) 99724-9614</td><td>(12) 3939-1499</td></tr></table>";
console.log("Passo 11");
console.log(telefone.match(regExp));

//-- Passo 12
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = "<table><tr><td>(12) 997662346</td><td>(12) 99724-9614</td><td>(12) 3939-1499</td></tr></table>";
console.log("Passo 12");
console.log(telefone.replace(regExp, "telefone"));