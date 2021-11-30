const Joi = require('joi')

module.exports = Joi.object({
    metodo_pagamento: Joi.string().valid('pix', 'cartao de credito', 'cartao de debito', 'dinheiro', 'boleto').lowercase().required(),
    status_pagamento: Joi.string().valid('pago', 'pendente', 'cancelado').lowercase().required(),
    valor_total: Joi.number().positive().integer().required()
})