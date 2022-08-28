const nome = "Tertu"
const idade = 2022 - 1982
const cidadeDeNascimento = "São Paulo"
const apresentacao = "Meu nome é " + nome + " tenho " + idade + " anos e nasci em " + cidadeDeNascimento

console.log(apresentacao)

//tempate string
const apresentacao2 = ` Meu nome é ${nome} tenho ${idade} anos e nasci em ${cidadeDeNascimento} `

console.log(apresentacao2)

a = []
b = 20
c = true 
d = ''

console.log(a, b, c, d)

// if (b === 20 && c != false && d == 0) {
//     console.log('Verdade')
// } else {
//     console.log('Falso')
// } // true

// if (a == 0) {
//     console.log('Verdade')
// } else {
//     console.log('Falso')
// } // true

if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}

const bebidaMaior = "Jurupinga";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "Por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
