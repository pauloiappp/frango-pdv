import { useState } from "react"
import "./App.css"

function App() {
  const [cliente, setCliente] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [valor, setValor] = useState("")
  const [itens, setItens] = useState([])

  const total = itens.reduce((soma, item) => soma + item.valor, 0)

  function adicionarItem() {
    if (!quantidade || !valor) return

    const novoItem = {
      produto: "Frango",
      quantidade: Number(quantidade),
      valor: Number(valor)
    }

    setItens([...itens, novoItem])
    setQuantidade("")
    setValor("")
  }

  function imprimirCupom() {
    window.print()
  }

  return (
    <div className="app">
      <header className="topo">
        <h1>Denis Frango</h1>
        <p>Abatedor de Frango</p>
      </header>

      <main className="layout">
        <section className="card venda">
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

          <button className="btn adicionar" onClick={adicionarItem}>
            Adicionar
          </button>
        </section>

        <section className="cupom">
          <h2>Denis Frango</h2>
          <p className="subtitulo">Comprovante de Venda</p>

          <hr />

          <p><strong>Cliente:</strong> {cliente || "Não informado"}</p>
          <p><strong>Data:</strong> {new Date().toLocaleDateString("pt-BR")}</p>

          <hr />

          {itens.length === 0 ? (
            <p className="vazio">Nenhum item adicionado.</p>
          ) : (
            itens.map((item, index) => (
              <div className="item-cupom" key={index}>
                <span>{item.produto} {item.quantidade}kg</span>
                <span>R$ {item.valor.toFixed(2).replace(".", ",")}</span>
              </div>
            ))
          )}

          <hr />

          <div className="total">
            Total: R$ {total.toFixed(2).replace(".", ",")}
          </div>

          <p className="rodape">Obrigado pela preferência!</p>

          <button className="btn imprimir" onClick={imprimirCupom}>
            Imprimir Cupom
          </button>
        </section>
      </main>
    </div>
  )
}

export default App