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
    getById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM FATURAS WHERE ID = ?`
            this.db.get(sql, id, (err, row) => {
                if (err) {
                    reject({
                        "mensagem": err.message
                    })
                }
                else {
                    resolve({
                        "Fatura": row,
                        "error": false
                    })
                }
            })
        })
    }
    deleteById(id) {
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
                        "mensagem": "Fatura excluida com sucesso",
                        "erro": false
                    })
                }
            })
        })
    }
    createFatura(params) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO FATURAS 
                        (METODO_PAGAMENTO,STATUS_PAGAMENTO,VALOR_TOTAL)
                        VALUES
                        (?,?,?)`
            this.db.run(sql, params, (err) => {
                if (err) {
                    reject({
                        "mensagem": err.message
                    })
                }
                else {
                    resolve({
                        "mensagem": "Fatura criada com sucesso",
                        "id": this.lastID,
                        "erro": false
                    })
                }
            })
        })
    }
    updateById(params) {
        return new Promise((resolve,reject)=>{
            const sql = `UPDATE FATURAS SET
                        METODO_PAGAMENTO = COALESCE(?,metodo_pagamento),
                        STATUS_PAGAMENTO = COALESCE(?,status_pagamento),
                        VALOR_TOTAL = COALESCE(?,valor_total)
                        WHERE ID = ?`
            this.db.run(sql,params,(err)=>{
                if(err){
                    reject({
                        "mensagem":err.message
                    })
                }
                else{
                    resolve({
                        "mensagem":"Fatura atualizada com sucesso",
                        "changes": this.changes,
                        "erro": false
                    })
                }
            })
        })
    }
}



module.exports = FaturasDAO