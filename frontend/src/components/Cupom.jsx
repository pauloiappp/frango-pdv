function Cupom({ cliente, itens, total, imprimirCupom }) {
  const dataAtual = new Date().toLocaleDateString("pt-BR")

  function formatarMoeda(valor) {
    return valor.toFixed(2).replace(".", ",")
  }

  return (
    <section className="cupom">
      <h2>Denis Frango</h2>
      <p className="subtitulo">Comprovante de Venda</p>

      <hr />

      <p>
        <strong>Cliente:</strong> {cliente || "Não informado"}
      </p>

      <p>
        <strong>Data:</strong> {dataAtual}
      </p>

      <hr />

      {itens.length === 0 ? (
        <p className="vazio">Nenhum item adicionado.</p>
      ) : (
        itens.map((item, index) => (
          <div className="item-cupom" key={index}>
            <span>
              {item.produto} {item.quantidade}kg
            </span>

            <span>R$ {formatarMoeda(item.valor)}</span>
          </div>
        ))
      )}

      <hr />

      <div className="total">
        Total: R$ {formatarMoeda(total)}
      </div>

      <p className="rodape">Obrigado pela preferência!</p>

      <button className="btn imprimir" onClick={imprimirCupom}>
        Imprimir Cupom
      </button>
    </section>
  )
}

export default Cupom