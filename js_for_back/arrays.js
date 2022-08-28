// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
console.log(0 in arvores);       // return true
console.log(3 in arvores);        // return true
console.log(6 in arvores);        // return false
console.log("cedro" in arvores);  // return false (você deve especificar o número do índice,
// não o valor naquele índice)
console.log("length" in arvores) // return true (length é uma propriedade de Array)

// Objetos predefinidos
console.log("PI" in Math)            // return true
var minhaString = new String("coral")
console.log("length" in minhaString) // return true

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998}
console.log("marca" in meucarro)  // return true
console.log("modelo" in meucarro) // return true

console.log(typeof Date);
console.log(typeof Function);
console.log(typeof Math);
console.log(typeof Option);
console.log(typeof String);
console.log(typeof Number);

// instanceof para determinar se dia é um objeto Date
var dia = new Date(1995, 12, 17);
if (dia instanceof Date) {
  console.log(dia)
}

function valide(obj, minimo, maximo){
    if ((obj.valor < minimo) || (obj.valor > maximo))
      alert("Valor inválido!");
}
