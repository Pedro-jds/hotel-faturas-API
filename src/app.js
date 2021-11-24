const express = require('express')
const tarefa = require('./controllers/faturasController')
const app = express()



//Middlewares
app.use(express.json());

tarefa(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



module.exports = app