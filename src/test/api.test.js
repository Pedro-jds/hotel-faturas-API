const request = require('supertest')
const app = require('../app')

describe('Teste rota get busca todas faturas', () => {
    test('Testando status 200', () => {
        return request(app)
            .get('/faturas')
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })
})

describe('Teste rota get fatura por id', () => {
    test('Testando status 200', () => {
        return request(app)
            .get('/faturas/:id')
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })
})

describe('Teste rota delete fatura por id', () => {
    test('Testando status 200', () => {
        return request(app)
            .delete('/faturas/:id')
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })
})

describe('Teste update de faturas rota patch', () => {
    test('Testando status 200', () => {
        return request(app)
            .patch('/faturas/:id')
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })
})

describe('Teste cadastro de faturas rota post', () => {
    test("Teste status 200", async () => {
        const res = await request(app)
            .post("/faturas")
            .send({
                "metodo_pagamento": "dinheiro",
                "status_pagamento": "pago",
                "valor_total": 1200
            })
        expect(res.statusCode).toBe(200)
    })
})

describe('Teste cadastro de faturas rota post com parametros incorretos', () => {
    test("testando status 422", async () => {
        const res = await request(app)
            .post("/faturas")
            .send({
                "metodo_pagamento": "xxxxxx",
                "status_pagamento": "XXXXXX",
                "valor_total": "xxxxxx"
            })
        expect(res.statusCode).toBe(422)
    })
})