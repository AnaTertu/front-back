const cliente = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:["+552877776666", "+5551977776666"],
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES",
    dependentes: [
    {
        nome: "Samantha",
        parentesco:"filha",
        dataNasc:"17/08/2000"
    },
    {
        nome: "Pedro",
        parentesco:"filho",
        dataNasc:"09/09/1998"
    }],
    saldo: 100.00,

    metodoDepositar: function(valor)
    {
        this.saldo += valor
    }

}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

 