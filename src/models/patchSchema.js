const Joi = require('joi')

module.exports = Joi.object({
    metodo_pagamento: Joi.string().valid('pix', 'cartao de credito', 'cartao de debito', 'dinheiro', 'boleto').lowercase(),
    status_pagamento: Joi.string().valid('pago', 'pendente', 'cancelado').lowercase(),
    valor_total: Joi.number().positive().integer()
})