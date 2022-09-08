console.log( Math.round()) //: Faz o arredondamento (round em inglês)) de um número de ponto flutuante para o inteiro mais próximo.

console.log( Math.round(4.3)) //retorna 4
console.log( Math.round(3.85)) //retorna 4
console.log( Math.round(2.5)) //retorna 3, quando o número termina com 0.5 a função arredonda para cima
console.log( Math.ceil()) //: Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês)).

console.log( Math.ceil(5.2)) //retorna 6
console.log( Math.floor()) //: Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês)).

console.log( Math.floor(5.2)) //retorna 5
console.log( Math.trunc()) //: Desconsidera os números decimais, o que é conhecido como truncamento.

console.log( Math.trunc(4.3)) // retorna 4
console.log( Math.trunc(4.8)) // retorna 4
console.log( Math.pow()) //: Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2)) ou cubo(3)). Recomenda-se usar a multiplicação por ser mais rápido.

console.log( Math.pow(4 , 2)) // retorna 4^2 = 16
console.log( Math.pow(2.5 , 1.5))  // retorna 2.5^(3/2)) = 3.9528 ...
console.log( Math.sqrt()) //: Retorna a raiz quadrada de um número.

console.log( Math.sqrt(64)) // retorna 8
console.log( Math.min()) //: Retorna o menor valor entre os argumentos.

console.log( Math.min(0, 150, 30, 20, -8, -200)) // retorna -200
console.log( Math.max()) // : Retorna o maior valor entre os argumentos.

console.log( Math.max(0, 150, 30, 20, -8, -200)) //retorna 150
console.log( Math.random()) //: Retorna um valor randômico (random em inglês)) entre 0 e 1, então não teremos um valor esperado para receber.

console.log( Math.random()) // retorna 0.7456916270759015
console.log( Math.random()) // retorna 0.15449802102729304
console.log( Math.random()) // retorna 0.4214269561951203
