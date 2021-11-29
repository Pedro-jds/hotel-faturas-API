const express = require('express')
const tarefa = require('./controllers/faturasController')
const app = express()
const cors = require('cors')



const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const options = {
  customCss: '.swagger-ui .topbar {display: none}'
};


//Middlewares
app.use(express.json());
app.use(cors())
app.use('/api-docs',cors(), swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

tarefa(app)

app.get('/', (req, res) => {
  res.send(`<h1>API gerenciador de faturas</h1>
            <a href="https://faturas-hotel-api.herokuapp.com/api-docs"><button>Acesse documentação interativa</button></a>`)
})



module.exports = app