const Faturas = require('../models/faturasModel')
const db = require('../database/sqlite-db')
const FaturasDAO = require('../DAO/FaturasDAO')

const fatura = (app) => {

    const novaFatura = new FaturasDAO(db)

    //Busca todas faturas cadastradas  
    app.get('/faturas', (req, res) => {
        novaFatura.getAll()
            .then((response) => {
                res.json(response)
            })
            .catch((error) => {
                res.json(error)
            })
    })
    //busca uma fatura filtrada pelo id
    app.get('/faturas/:id', (req, res) => {
        const id = req.params.id
        novaFatura.getById(id)
            .then((response) => {
                res.json(response)
            })
            .catch((error) => {
                res.json(error)
            })
    })

    app.delete('/faturas/:id', (req,res)=>{
        const id = req.params.id
        novaFatura.deleteById(id)
        .then((response)=>{
            res.json(response)
        })
        .catch((error)=>{
            res.json(error)
        })
    })

    app.post('/faturas',(req,res)=>{
        const body = req.body
        const fatura = new Faturas(body.metodo_pagamento,body.status_pagamento,body.valor_total)
        const params = [fatura.metodoPagamento,fatura.statusPagamento,fatura.valorTotal]
        novaFatura.createFatura(params)
        .then((response)=>{
            res.json(response)
        })
        .catch((error)=>{
            res.json(error)
        })
    })

    app.patch('/faturas/:id',(req,res)=>{
        const id = req.params.id
        const body = req.body
        const params = [body.metodo_pagamento,body.status_pagamento,body.valor_total,id]
        novaFatura.updateById(params)
        .then((response)=>{
            res.json(response)
        })
        .catch((error)=>{
            res.json(error)
        })
    })
}


module.exports = fatura