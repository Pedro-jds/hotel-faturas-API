class Faturas {
    constructor(metodoPagamento,statusPagamento,valorTotal){
        this.metodoPagamento = metodoPagamento
        this.statusPagamento = this.verificaStatus(statusPagamento).toLowerCase()
        this.valorTotal = valorTotal
    }

    verificaStatus(statusPagamento){
        switch (statusPagamento.toLowerCase()) {
            case 'pago':
              break;
            case 'pendente':
              break;
            case 'cancelado':
              break;
            default:
                throw new Error("Status desconhecido, informe entre (pago, pendente ou cancelado)")
          }
          return statusPagamento;
    }
}

module.exports = Faturas