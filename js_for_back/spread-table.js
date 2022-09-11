const _cliente = [
    {
        nome:"Bruce Banner",
        cpf: "33344455566",
        _dependentes: [
        {
            nome: "Samantha",
            parentesco:"filha",
            dataNasc:"17/08/2000"
        },
        {
            nome: "Pedro",
            parentesco:"filho",
            dataNasc:"09/09/1998"
        }]     
    },
    {
        nome:"Danilo Silva",
        cpf: "22233344455",
        _dependentes: [
        {
            nome: "Nasa",
            parentesco:"filha",
            dataNasc:"17/08/2000"
        },
        {
            nome: "Piedro",
            parentesco:"filho",
            dataNasc:"09/09/1998"
        }]
        
    }
]

//operador de espalhamento
// const lista_Dependentes = [ ..._cliente[0]._dependentes, ..._cliente[1]._dependentes ]
// console.log(lista_Dependentes)
// console.table(lista_Dependentes)

for ( let info in _cliente ){
    const lista_Dependentes = [ ..._cliente[0]._dependentes, ..._cliente[1]._dependentes ]
        console.table(lista_Dependentes)
}

