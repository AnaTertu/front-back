// const num = [100, 200, 300, 400, 500, 600 ]

// for (let i = 0; i < num.length; i++ ) {
//     console.log(i, num[i])
// }

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

let relatorio=""

for ( let info in cliente ){
    relatorio += `${info} - `
    relatorio += ` ${cliente[info]}`
}

console.log(relatorio)

const clientes = {
    nome:"KetlinJones",
    dataNascimento:"09/01/1950",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:["+552877776666", "+5551977776666"],
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES",
    dependentes: [
    {
        nome: "Donald",
        parentesco:"filho",
        dataNasc:"17/08/1990"
    },
    {
        nome: "Petruchio",
        parentesco:"filha",
        dataNasc:"09/09/1998"
    }],
    saldo: 100.00,

    metodoDepositar: function(valor)
    {
        this.saldo += valor
    }

}

let relatorios=""

for ( let info in clientes ){
    if ( typeof clientes[info] !== "object" && typeof clientes[info] !== "function"){
        relatorios += ` 
        ${info} ==> ${clientes[info]} 
        `
    }
}

console.log(" ")
console.log(relatorios)

const propsClientes = Object.keys(clientes)
console.log(" ")
console.log(propsClientes)

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro para ${obj.nome}`)
    }
}

console.log(Object.values(clientes))
console.log(Object.entries(clientes))
oferecerSeguro(clientes)
