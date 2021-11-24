class FaturasDAO {

    constructor(bd) {
        this.bd = bd
    }
    getAll() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM FATURAS`
            this.bd.all(sql, (err, rows) => {
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
}

module.exports = FaturasDAO