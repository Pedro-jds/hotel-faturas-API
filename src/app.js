const express = require('express')
const tarefa = require('./controllers/faturasController')
const app = express()
const cors = require('cors')



const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const  options  =  { 
  customCss : '.swagger-ui .topbar {display: none}' } ;


//Middlewares
app.use(express.json());
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));

tarefa(app)

app.get('/', (req, res) => {
  res.send(`<h1>API gerenciador de tarefas</h1>`)
})



module.exports = app