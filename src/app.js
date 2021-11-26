const express = require('express')
const tarefa = require('./controllers/faturasController')
const app = express()
const cors = require('cors')


//Middlewares
app.use(express.json());
app.use(cors())

tarefa(app)

app.get('/', (req, res) => {
  res.send('Bem vindo ao gerenciador de faturas API')
})



module.exports = app