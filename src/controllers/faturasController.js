const Faturas = require('../models/faturasModel')
const db = require('../database/sqlite-db')
const FaturasDAO = require('../DAO/FaturasDAO')

const fatura = (app) => {

    const novaFatura = new FaturasDAO(db)

    //busca todas faturas cadastradas  
    app.get('/faturas', async (req, res) => {
        try {
            const response = await novaFatura.getAll()
            res.json(response)
        } catch (error) {
            res.json(error)
        }
    })
    //busca uma fatura filtrada pelo id
    app.get('/faturas/:id', async (req, res) => {
        try {
            const id = req.params.id
            const response = await novaFatura.getById(id)
            res.json(response)
        } catch (error) {
            res.json(error)
        }
    })
    //exclui uma fatura pelo id
    app.delete('/faturas/:id', async (req, res) => {
        try {
            const id = req.params.id
            const response = await novaFatura.deleteById(id)
            res.json(response)
        } catch (error) {
            res.json(error)
        }
    })
    //cria uma fatura 
    app.post('/faturas', async (req, res) => {
        try {
            const body = req.body
            const fatura = new Faturas(body.metodo_pagamento, body.status_pagamento, body.valor_total)
            const params = [fatura.metodoPagamento, fatura.statusPagamento, fatura.valorTotal]
            const response = await novaFatura.createFatura(params)
            res.json(response)
        } catch (error) {
            res.json(error)
        }
    })
    //atualiza 1 ou mais dados de uma fatura
    app.patch('/faturas/:id', async (req, res) => {
        try {
            const id = req.params.id
            const body = req.body
            const params = [body.metodo_pagamento, body.status_pagamento, body.valor_total, id]
            const response = await novaFatura.updateById(params)
            res.json(response)

        } catch (error) {
            res.json(error)
        }
    })
}


module.exports = fatura