class Faturas {
  static verificaStatus(statusPagamento) {
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
  static verificaMetodo(metodoPagamento) {
    switch (metodoPagamento.toLowerCase()) {
      case 'pix':
        break;
      case 'cartao de credito':
        break;
      case 'cartao de debito':
        break;
      case 'dinheiro':
        break;
      case 'cheque':
        break;
      case 'boleto':
        break;
      default:
        throw new Error("Status desconhecido, informe entre (pix, cartao de credito, cartao de debito, dinheiro, cheque ou boleto)")
    }
    
    return metodoPagamento;
  }
  static verificaValorTotal(valorTotal) {
    if (isNaN(valorTotal)||valorTotal > 100000) {
      throw new Error("Digite um valor valido")
    }
    else {
      console.log(valorTotal.length)
      return valorTotal;
    }
  }


  constructor(metodoPagamento, statusPagamento, valorTotal) {
    this.metodoPagamento = Faturas.verificaMetodo(metodoPagamento).toLowerCase()
    this.statusPagamento = Faturas.verificaStatus(statusPagamento).toLowerCase()
    this.valorTotal = Faturas.verificaValorTotal(valorTotal)
  }

}

module.exports = Faturas