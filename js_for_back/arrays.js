// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro"); // não é possível obter par chave e valor
console.log(0 in arvores);       // return true
console.log(3 in arvores);        // return true
console.log(6 in arvores);        // return false
console.log("cedro" in arvores);  // return false (você deve especificar o número do índice, não o valor naquele índice)
console.log("length" in arvores) // return true (length é uma propriedade de Array)

// Objetos predefinidos
console.log("PI" in Math)            // return true
var minhaString = new String("coral")
console.log("length" in minhaString) // return true

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998}
console.log("marca" in meucarro)  // return true , chave
console.log("Honda" in meucarro) // return false , não return valor
console.log(1 in meucarro) // false
console.log([0] in meucarro) 

console.log(typeof Date);
console.log(typeof Function);
console.log(typeof Math);
console.log(typeof Option);
console.log(typeof String);
console.log(typeof Number);

// instanceof para determinar se dia é um objeto Date
var dia = new Date(2022, 12, 17);
if (dia instanceof Date) {
  console.log(dia)
}

function valide(obj, minimo, maximo){
    if ((obj.valor < minimo) || (obj.valor > maximo))
      alert("Valor inválido!");
}
console.log(valide) 

// LOCALIZAR
const alunos = [ 'Leo', 'Ju', 'Thami', 'Vini' ]
const media = [10, 8, 7, 10]

let mediaAlunos = [ alunos, media]

//verificar se existe o aluno
const exibeNotaAluno = (nomeAlunos) => {
  if(mediaAlunos[0].includes(nomeAlunos)) { // includes return boolean -> true or false
    let i = mediaAlunos[0].indexOf(nomeAlunos) // indexOf return number of position value
          // position [0][3] -> referente a alunos posição do Vini / / position [1][3] -> referente ao segundo array e a 3 posição
    return mediaAlunos[0][i] + ', sua média é '                    + mediaAlunos[1][i]
  } else {
    return "Aluno não cadastrado"
  }
}

console.log(exibeNotaAluno("Vini"))
console.log(exibeNotaAluno("Alan"))
