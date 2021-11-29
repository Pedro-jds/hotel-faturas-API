## Hotel California API

### Link da API no HEROKU:
https://faturas-hotel-api.herokuapp.com/

### Bibliotecas utilizadas:
* [Nodemon](https://nodemon.io/) - recarregamento automático durante desenvolvimento.
* [Supertest](https://github.com/visionmedia/supertest#readme) - para testar as rotas.


### Banco de dados
[Sqlite3](https://www.npmjs.com/package/sqlite3).
---

## Iniciando o projeto
Abra o terminal (Linux/Mac) ou o PowerShell (Windows) e siga os passos abaixo.
* Clone o repositório em sua máquina

    `git clone git@github.com:Pedro-jds/hotel-faturas-API.git`

* Acesse a pasta criada 

    `cd hotel-faturas-API`

* Instale os pacotes

    `npm install`

* Para iniciar os projetos use o comando abaixo

    `npm run start`

    A porta padrão é a __3002__.

---

## Estrutura da API
HTTP: GET, POST, PUT e DELETE.

### **Resumo das rotas**
Segue abaixo um resumo das rotas da API. Em seguida terão mais informações sobre cada uma delas.

* GET: *URL_BASE/faturas*
* GET: *URL_BASE/faturas/{id}*
* POST: *URL_BASE/faturas*
* PATCH: *URL_BASE/faturas/{id}*
* DELETE: *URL_BASE/faturas/{id}*


### **Retornando os Hóspedes**

GET: *URL_BASE/faturas*

RESPOSTA

~~~JSON
  {
  {
  "Faturas": [
    {
      "ID": 1,
      "METODO_PAGAMENTO": "dinheiro",
      "STATUS_PAGAMENTO": "pago",
      "VALOR_TOTAL": 3000,
      "DATA_CRIACAO": "24-11-2021",
      "ULTIMA_ATUALIZACAO": "27-11-2021"
    },
    {
      "ID": 2,
      "METODO_PAGAMENTO": "cartao de debito",
      "STATUS_PAGAMENTO": "pendente",
      "VALOR_TOTAL": 1800,
      "DATA_CRIACAO": "24-11-2021",
      "ULTIMA_ATUALIZACAO": "26-11-2021"
    },
    {
      "ID": 3,
      "METODO_PAGAMENTO": "dinheiro",
      "STATUS_PAGAMENTO": "pago",
      "VALOR_TOTAL": 1200,
      "DATA_CRIACAO": "24-11-2021",
      "ULTIMA_ATUALIZACAO": "24-11-2021"
    },
    {
      "ID": 4,
      "METODO_PAGAMENTO": "cartao de credito",
      "STATUS_PAGAMENTO": "cancelado",
      "VALOR_TOTAL": 1600,
      "DATA_CRIACAO": "24-11-2021",
      "ULTIMA_ATUALIZACAO": "24-11-2021"
    },
    {
      "ID": 5,
      "METODO_PAGAMENTO": "cartao de debito",
      "STATUS_PAGAMENTO": "pendente",
      "VALOR_TOTAL": 3000,
      "DATA_CRIACAO": "25-11-2021",
      "ULTIMA_ATUALIZACAO": "25-11-2021"
    },
    {
      "ID": 6,
      "METODO_PAGAMENTO": "cartao de debito",
      "STATUS_PAGAMENTO": "cancelado",
      "VALOR_TOTAL": 3000,
      "DATA_CRIACAO": "25-11-2021",
      "ULTIMA_ATUALIZACAO": "25-11-2021"
    }
  ],
  "count": 6,
  "error": false
}
~~~

GET: *URL_BASE/faturas/{id}*

Resposta para id = 1:
~~~JSON
  {
  "Faturas": {
      "ID": 1,
      "METODO_PAGAMENTO": "dinheiro",
      "STATUS_PAGAMENTO": "pago",
      "VALOR_TOTAL": 3000,
      "DATA_CRIACAO": "24-11-2021",
      "ULTIMA_ATUALIZACAO": "27-11-2021"
    },
  "error": false
}
~~~

### **Inserindo novo hóspede**

POST: *URL_BASE/faturas*

Modelo a ser utilizado no body, no formato JSON,não enviar dados para data_criacao e ultima_atualizacao pois são gerados de forma automática via trigger sql:

~~~JSON
{
      "metodo_pagamento": "pix",
      "statu_pagamento": "pago",
      "valor_total": 1000,
}
~~~
 
 Resposta:
 ~~~JSON
 {
  "mensagem": "Fatura inserida com sucesso",
  "erro": false,
  "id": 16
}
~~~

**IMPORTANTE**:

### **Atualizando Hóspedes**

PUT: *URL_BASE/faturas/{id}*

Modelo a ser utilizado no body, no formato JSON. **Não é obrigatório** conter todos atributos:

~~~JSON
{
      "metodo_pagamento": "pix",
      "statu_pagamento": "pago",
      "valor_total": 1000,
}
~~~
Resposta:
 ~~~JSON
{
  "messagem": "Hóspede atualizado com sucesso",
  "erro": false,
  "changes": 1
}
~~~

### **Deletando Hóspede**

DELETE: *URL_BASE/faturas/{id}*
Resposta:
 ~~~JSON
{
  "mensagem": "Hospede excluído com sucesso!",
  "changes": 1
}
~~~

---

## Testes
`npm run test`
