function FormVenda({
  cliente,
  setCliente,
  quantidade,
  setQuantidade,
  valor,
  setValor,
  adicionarItem
}) {
  function enviarFormulario(e) {
    e.preventDefault()
    adicionarItem()
  }

  return (
    <form className="card venda" onSubmit={enviarFormulario}>
      <h2>Nova Venda</h2>

      <input
        type="text"
        placeholder="Nome do cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantidade (kg)"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button className="btn adicionar" type="submit">
        Adicionar
      </button>
    </form>
  )
}

export default FormVenda