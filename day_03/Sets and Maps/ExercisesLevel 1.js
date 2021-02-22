//1
const monSet = new Set([]);
//2
monSet.add(1);         // { 1 }
monSet.add(5);         // { 1, 5 }
monSet.add("texte");// { 1, 5, "du texte" }
console.log(monSet)
//3
monSet.delete(1)
console.log(monSet)
//4
monSet.clear()
//5 Créez un ensemble **set** de 5 éléments de chaîne à partir du tableau
const monSet = new Set([1,"kk",55," ","abc"]);
//6  Créez un dictionnaire **map** des pays et du nombre de caractères d'un pays


var pays = ["maroc", "algerie", "france"];
var nombre = pays.map(function(num) {return num.length;});
console.log(nombre);


