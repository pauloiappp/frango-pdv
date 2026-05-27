import { useState } from "react"
import "./App.css"

import FormVenda from "./components/FormVenda"
import Cupom from "./components/Cupom"

function App() {
  const [cliente, setCliente] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [valor, setValor] = useState("")
  const [itens, setItens] = useState([])
  const [formaPagamento, setFormaPagamento] = useState("Dinheiro")
  const [valorRecebido, setValorRecebido] = useState("")

  const total = itens.reduce((soma, item) => soma + item.valor, 0)
  const troco = Number(valorRecebido) - total

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

  function removerItem(index) {
    const novaLista = itens.filter((item, itemIndex) => itemIndex !== index)
    setItens(novaLista)
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

   <main className="layout-pdv">
  <div className="painel-formulario">
    <FormVenda
      cliente={cliente}
      setCliente={setCliente}
      quantidade={quantidade}
      setQuantidade={setQuantidade}
      valor={valor}
      setValor={setValor}
      adicionarItem={adicionarItem}
      formaPagamento={formaPagamento}
      setFormaPagamento={setFormaPagamento}
      valorRecebido={valorRecebido}
      setValorRecebido={setValorRecebido}
    />
  </div>

  <div className="painel-cupom">
    <Cupom
      cliente={cliente}
      itens={itens}
      total={total}
      imprimirCupom={imprimirCupom}
      removerItem={removerItem}
      formaPagamento={formaPagamento}
      valorRecebido={valorRecebido}
      troco={troco}
    />
  </div>
</main>
    </div>
  )
}

export default App