// let  x = ""
// console.log(x)
// x = "não serie exibida"

// printText("A função será exibida")


// // três tipos de escrever funçoes

// // 1 - DECLARAÇÃO DE FUNÇÀO

//         // A) declaro a função
//         function printText(parametros){
//             console.log(parametros)
//         }

//         // B) Chamo e executo a função (1 ou + vezes)
//         printText("em qualquer posição que for chamada")
//         printText("tbm posso chamar uma função dentro da outra -> somar() retorna " + somar())

//         // RETURN
//         function soma(){
//             const resultado = 2 + 2
//         }
//         // nada é exibido pois a informação está restrita dentro do bloco {} para que não ocorra fora de hora
//         // e nada declara o momento para externar a informação

//         soma()
//         console.log(soma()) //undefined

//         function somar(){
//             return 2 + 2
//         }

//         somar()
//         console.log(somar())

//         // PARAMETROS

//         // function (parametros) { condição e retorno }
//         // parametro recebe o nome referente, ou mesmo seu tipo
//         // posso declarar valor padrão ou não, mas ajuda no caso de faltar um parametro
//         function somar2(num1 = 1, num2 = 2) {
//             return num1 + num2
//         }

//         // os parametros tem o mesmo nome em ambas as funções e tudo bem pois nascem e morrem dentro das {}
//         function multiplicar(num1 = 1, num2 = 2) {
//             return num1 * num2
//         }


//         console.log(somar2(3, 5))
//         console.log(somar2(5))

//         console.log(multiplicar(3, 5))
//         console.log(multiplicar(5))


//         console.log("função chama função -> " + multiplicar(somar2(1, 2), somar(2,3)))

//     // parametros similar argumentos
//     // ATENÇÀO À ORDEM
//     // cada função tem um nome único

//     function cumprimentar(){
//         console.log('oi gente!')
//     }
    
//     console.log(cumprimentar())

//     function cumprimentaPessoa(pessoa){
//         console.log(`oi, ${pessoa}!`)
//     }
    
//     cumprimentaPessoa('Helena')

//     function cumprimentar(){
//         return 'Oi gente!'
//     }
    
//     function cumprimentarPessoa(nomePessoa) {
//         console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
//     }
    
//     cumprimentarPessoa('Paula')

//     function comParametro(param) {
//         console.log(param)
//     }
//     comParametro()

  //  FIM DECLARAÇÃO DE FUNÇÀO

// 2 - EXPRESSÃO DE FUNÇÃO

// são funções anônimas 
// a const recebe o nome e a função a ela será atribuída
// o ideal é ser escrtio em uma linha

    // por ser CONST se comporta como variável por tanto NÃO posso chamar antes 
    // console.log(dividir(10,2)) 
    
    // const dividir = function(num1, num2) {return num1 / num2 }
    // console.log(dividir(10,2))

    // 3 - ARROW FUCTION

    // Hoisting arrow function se comporta como expressão   

    // não pode ser nomeada
    // não necessita de (){} nem return, se for mais de um argumento use parentese para distinguir
    function estudar(func) {
        return `estudo sobre ${func}`
    }

    const estudar = func => `estudo sobre ${func}`
    const subtrair = (num1, num2) => num1 - num2