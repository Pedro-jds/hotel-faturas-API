const express = require('express')
const tarefa = require('./controllers/faturasController')
const app = express()



//Middlewares
app.use(express.json());

tarefa(app)

app.get('/', (req, res) => {
  res.send('Bem vindo ao gerenciador de faturas API')
})



module.exports = app