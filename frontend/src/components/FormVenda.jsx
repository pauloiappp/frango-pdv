<form className="card venda" onSubmit={enviarFormulario}>
  <h2>Nova Venda</h2>

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
    <label>Quantidade</label>
    <input
      type="number"
      placeholder="Quantidade (kg)"
      value={quantidade}
      onChange={(e) => setQuantidade(e.target.value)}
    />
  </div>

  <div className="campo">
    <label>Valor</label>
    <input
      type="number"
      placeholder="Valor"
      value={valor}
      onChange={(e) => setValor(e.target.value)}
    />
  </div>

  <div className="campo">
    <label>Pagamento</label>
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
        placeholder="Valor recebido"
        value={valorRecebido}
        onChange={(e) => setValorRecebido(e.target.value)}
      />
    </div>
  )}

  <button className="btn adicionar" type="submit">
    Adicionar
  </button>
</form>