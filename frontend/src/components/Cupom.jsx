function Cupom({
  numeroCupom,
  cliente,
  itens,
  total,
  imprimirCupom,
  removerItem,
  formaPagamento,
  valorRecebido,
  troco
}) {
  const dataHoraAtual = new Date()
    .toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
    .replace(",", "")

  function formatarMoeda(valor) {
    return valor.toFixed(2).replace(".", ",")
  }

  function formatarKg(valor) {
    return valor.toFixed(3).replace(".", ",")
  }

  function textoItem(item) {
    if (item.produto === "Frango inteiro") {
      return `${item.produto} - ${item.quantidadeFrangos}un - ${formatarKg(
        item.pesoKg
      )}kg x R$ ${formatarMoeda(item.precoKg)}/kg`
    }

    return `${item.produto} - ${formatarKg(item.pesoKg)}kg x R$ ${formatarMoeda(
      item.precoKg
    )}/kg`
  }

  return (
    <section className="painel-venda">
      <div className="cupom">
        <div className="cupom-topo">
          <h2>Dennys Frango</h2>
          <p>Comprovante de Venda</p>
          <strong className="numero-cupom">
            Cupom Nº {String(numeroCupom).padStart(5, "0")}
          </strong>
        </div>

        <div className="linha-tracejada"></div>

        <div className="dados-cupom">
          <p>
            <strong>Cliente:</strong> {cliente || "Não informado"}
          </p>

          <p>
            <strong>Data/Hora:</strong> {dataHoraAtual}
          </p>
        </div>

        <div className="linha-tracejada"></div>

        <div className="lista-itens">
          {itens.length === 0 ? (
            <p className="vazio">Nenhum item adicionado.</p>
          ) : (
            itens.map((item, index) => (
              <div className="item-cupom" key={index}>
                <div className="item-info">
                  <span>{textoItem(item)}</span>
                  <strong>R$ {formatarMoeda(item.valor)}</strong>
                </div>

                <button
                  className="btn-remover"
                  type="button"
                  onClick={() => removerItem(index)}
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>

        <div className="linha-tracejada"></div>

        <div className="total-cupom">
          <span>Total</span>
          <strong>R$ {formatarMoeda(total)}</strong>
        </div>

        <div className="linha-tracejada"></div>

        <div className="pagamento-cupom">
          <div className="linha-cupom">
            <span>Pagamento</span>
            <strong>{formaPagamento}</strong>
          </div>

          {formaPagamento === "Dinheiro" && (
            <>
              <div className="linha-cupom">
                <span>Recebido</span>
                <strong>R$ {formatarMoeda(Number(valorRecebido) || 0)}</strong>
              </div>

              <div className="linha-cupom troco">
                <span>Troco</span>
                <strong>R$ {formatarMoeda(troco > 0 ? troco : 0)}</strong>
              </div>
            </>
          )}
        </div>

        <div className="linha-tracejada"></div>

        <p className="rodape">Obrigado pela preferência!</p>

        <button className="btn imprimir" onClick={imprimirCupom}>
          Imprimir cupom
        </button>
      </div>
    </section>
  )
}

export default Cupom