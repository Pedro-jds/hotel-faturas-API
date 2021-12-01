class FaturasDAO {

    constructor(db) {
        this.db = db
    }
    getAll() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM FATURAS`
            this.db.all(sql, (err, rows) => {
                if (err) {
                    reject({
                        "mensagem": err.message
                    })
                }
                else {
                    resolve({
                        "Faturas": rows,
                        "count": rows.length,
                        "error": false
                    })
                }
            })
        })
    }
    async getById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM FATURAS WHERE ID = ?`
            this.db.get(sql, id, (err, row) => {
                if (err) {
                    reject({
                        "mensagem": err.message,
                        "error": true
                    })
                }
                else {
                    if (row === undefined) {
                        row = { "mensagem": "Fatura não existe" }
                    }
                    resolve({
                        "Fatura": row,
                        "error": false
                    })
                }
            })
        })
    }
    async deleteById(id) {
        const fatura = await this.getById(id)
        if (fatura.Fatura.mensagem === 'Fatura não existe') {
            throw new Error('Fatura não existe')
        }
        else {
            return new Promise((resolve, reject) => {
                const sql = `DELETE FROM FATURAS WHERE ID = ?`
                this.db.run(sql, id, (err) => {
                    if (err) {
                        reject({
                            "mensagem": err.message
                        })
                    }
                    else {
                        resolve({
                            "mensagem": `Fatura id:${fatura.Fatura.ID} excluida com sucesso`,
                            "erro": false
                        })
                    }
                })
            })
        }
    }
    createFatura(params) {

        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO FATURAS 
                        (METODO_PAGAMENTO,STATUS_PAGAMENTO,VALOR_TOTAL)
                        VALUES
                        (?,?,?)`
            this.db.run(sql, params, function (err) {
                if (err) {
                    reject({
                        "mensagem": err.message
                    })
                }
                else {
                    resolve({
                        "mensagem": "Fatura criada com sucesso",
                        "identificador": this.lastID,
                        "erro": false,
                    })
                }
            })
        })
    }
    async updateById(params) {
        const fatura = await this.getById(params[3])
        if (fatura.Fatura.mensagem === 'Fatura não existe') {
            throw new Error('Fatura não existe')
        } else {
            return new Promise((resolve, reject) => {
                const sql = `UPDATE FATURAS SET
                        METODO_PAGAMENTO = COALESCE(?,metodo_pagamento),
                        STATUS_PAGAMENTO = COALESCE(?,status_pagamento),
                        VALOR_TOTAL = COALESCE(?,valor_total)
                        WHERE ID = ?`
                this.db.run(sql, params, function (err) {
                    if (err) {
                        reject({
                            "mensagem": err.message
                        })
                    }
                    else {
                        resolve({
                            "mensagem": "Fatura atualizada com sucesso",
                            "identificador": params[3],
                            "erro": false
                        })
                    }
                })
            })
        }
    }
}


module.exports = FaturasDAO