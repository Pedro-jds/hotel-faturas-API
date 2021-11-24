const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);


const FATURAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FATURAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "METODO_PAGAMENTO" varchar(20),
    "STATUS_PAGAMENTO" varchar(20),
    "VALOR_TOTAL" decimal,
    "DATA_CRIACAO" date,
    "ULTIMA_ATUALIZACAO" date
  );`;

const TRIGGER_DATA_CRIADA = `
CREATE TRIGGER IF NOT EXISTS insert_Timestamp_Trigger
    AFTER INSERT ON FATURAS
        BEGIN
    UPDATE FATURAS SET DATA_CRIACAO =STRFTIME('%d-%m-%Y', 'NOW') WHERE id = NEW.id;
    END;`

const TRIGGER_ULTIMA_ATUALIZACAO = `
CREATE TRIGGER IF NOT EXISTS update_Timestamp_Trigger
    AFTER UPDATE On FATURAS
        BEGIN
    UPDATE FATURAS SET ULTIMA_ATUALIZACAO = STRFTIME('%d-%m-%Y', 'NOW') WHERE id = NEW.id;
    END;`

const ADD_FATURAS_DADOS = `
INSERT INTO FATURAS (METODO_PAGAMENTO,STATUS_PAGAMENTO,VALOR_TOTAL)
        VALUES
    ("cartao de debito","pedente",1800),
    ("dinheiro","pago",1200),
    ("cartao de credito","cancelado",1600)`

    function criaTabelaFatura() {
        db.run(FATURAS_SCHEMA, (error)=> {
           if (error) console.log("Erro ao criar tabela de usuários");
        });
    }
    
    
    function triggerInserir() {
        db.run(TRIGGER_DATA_CRIADA, (error)=> {
           if (error) console.log("Erro ao popular tabela de usuários");
        });
    }

    function triggerAtualizar() {
        db.run(TRIGGER_ULTIMA_ATUALIZACAO, (error)=> {
           if (error) console.log("Erro ao popular tabela de usuários");
        });
    }

    function popular() {
        db.run(ADD_FATURAS_DADOS, (error)=> {
           if (error) console.log("Erro ao popular tabela de usuários"+error);
        });
    }


    db.serialize( ()=> {
        criaTabelaFatura();
        triggerInserir();
        triggerAtualizar();
        popular();
    });