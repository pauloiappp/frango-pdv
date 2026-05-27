function FormVenda({
  cliente,
  setCliente,
  produto,
  setProduto,
  quantidadeFrangos,
  setQuantidadeFrangos,
  pesoKg,
  atualizarPeso,
  precoKg,
  atualizarPrecoKg,
  valor,
  setValor,
  adicionarItem,
  formaPagamento,
  setFormaPagamento,
  valorRecebido,
  setValorRecebido
}) {
  function enviarFormulario(e) {
    e.preventDefault()
    adicionarItem()
  }

  return (
    <form className="card venda" onSubmit={enviarFormulario}>
      <div className="card-header">
        <h2>Nova Venda</h2>
        <span>PDV</span>
      </div>

      <div className="campo">
        <label>Cliente</label>
        <input
          type="text"
          placeholder="Nome do cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Produto/Corte</label>
        <select value={produto} onChange={(e) => setProduto(e.target.value)}>
          <option value="Frango inteiro">Frango inteiro</option>
          <option value="Asa">Asa</option>
          <option value="Moela">Moela</option>
          <option value="Miúdo">Miúdo</option>
          <option value="Coração">Coração</option>
          <option value="Peito">Peito</option>
          <option value="Coxa">Coxa</option>
          <option value="Sobrecoxa">Sobrecoxa</option>
          <option value="Fígado">Fígado</option>
        </select>
      </div>

      {produto === "Frango inteiro" && (
        <div className="campo">
          <label>Qtd. frangos</label>
          <input
            type="number"
            placeholder="Ex: 2"
            value={quantidadeFrangos}
            onChange={(e) => setQuantidadeFrangos(e.target.value)}
          />
        </div>
      )}

      <div className="campo">
        <label>Peso total (kg)</label>
        <input
          type="number"
          step="0.001"
          placeholder="Ex: 1.300"
          value={pesoKg}
          onChange={(e) => atualizarPeso(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Preço por kg</label>
        <input
          type="number"
          step="0.01"
          placeholder="Ex: 18"
          value={precoKg}
          onChange={(e) => atualizarPrecoKg(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Valor</label>
        <input
          type="number"
          step="0.01"
          placeholder="Valor total"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Forma de pagamento</label>
        <select
          value={formaPagamento}
          onChange={(e) => setFormaPagamento(e.target.value)}
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Pix">Pix</option>
          <option value="Cartão">Cartão</option>
        </select>
      </div>

      {formaPagamento === "Dinheiro" && (
        <div className="campo">
          <label>Valor recebido</label>
          <input
            type="number"
            step="0.01"
            placeholder="Valor recebido"
            value={valorRecebido}
            onChange={(e) => setValorRecebido(e.target.value)}
          />
        </div>
      )}

      <button className="btn adicionar" type="submit">
        Adicionar item
      </button>
    </form>
  )
}

export default FormVenda