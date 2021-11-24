const faturas = require('../models/faturasModel')
const bd = require('../database/sqlite-db')
const FaturasDAO = require('../DAO/FaturasDAO')

const fatura = (app) => {

    const novaFatura = new FaturasDAO(bd)

     //Busca todas faturas cadastradas  
     app.get('/faturas', (req, res) => {
        novaFatura.getAll()
            .then((resposta) => {
                res.json(resposta)
            })
            .catch((error) => {
                res.json(error)
            })
    })
}

module.exports = fatura