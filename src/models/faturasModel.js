class Faturas {
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
    this.metodoPagamento = metodoPagamento.toLowerCase()
    this.statusPagamento = statusPagamento.toLowerCase()
    this.valorTotal = Faturas.verificaValorTotal(valorTotal)
  }

}

module.exports = Faturas