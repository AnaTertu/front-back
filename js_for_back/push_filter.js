const cliente = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:["+552877776666", "+5551977776666"],
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES",
    dependentes: [{
        nome: "Samantha",
        parentesco:"filha",
        dataNasc:"17/08/2000"
    }]

 }

 cliente.dependentes.push({
    nome: "Pedro",
    parentesco:"filho",
    dataNasc:"09/09/1998"
 })

 console.log(cliente)

 const filhaNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "17/08/2000")

 console.log(filhaNova)
 console.log(filhaNova[0].nome)
 