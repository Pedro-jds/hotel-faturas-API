const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./src/controllers/faturasController']

swaggerAutogen(outputFile, endpointsFiles)