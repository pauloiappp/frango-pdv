import { useState } from "react"
import "./App.css"

import FormVenda from "./components/FormVenda"
import Cupom from "./components/Cupom"

function App() {
  const [cliente, setCliente] = useState("")
  const [produto, setProduto] = useState("Frango inteiro")
  const [quantidadeFrangos, setQuantidadeFrangos] = useState("")
  const [pesoKg, setPesoKg] = useState("")
  const [valor, setValor] = useState("")
  const [itens, setItens] = useState([])
  const [formaPagamento, setFormaPagamento] = useState("Dinheiro")
  const [valorRecebido, setValorRecebido] = useState("")

  const total = itens.reduce((soma, item) => soma + item.valor, 0)
  const troco = Number(valorRecebido) - total

  function adicionarItem() {
    if (!pesoKg || !valor) return

    if (produto === "Frango inteiro" && !quantidadeFrangos) return

    const novoItem = {
      produto,
      quantidadeFrangos: Number(quantidadeFrangos) || 0,
      pesoKg: Number(pesoKg),
      valor: Number(valor)
    }

    setItens([...itens, novoItem])
    setQuantidadeFrangos("")
    setPesoKg("")
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
        <div>
          <h1>Denis Frango</h1>
          <p>Sistema de venda - Abatedor de Frango</p>
        </div>
      </header>

      <main className="layout-pdv">
        <FormVenda
          cliente={cliente}
          setCliente={setCliente}
          produto={produto}
          setProduto={setProduto}
          quantidadeFrangos={quantidadeFrangos}
          setQuantidadeFrangos={setQuantidadeFrangos}
          pesoKg={pesoKg}
          setPesoKg={setPesoKg}
          valor={valor}
          setValor={setValor}
          adicionarItem={adicionarItem}
          formaPagamento={formaPagamento}
          setFormaPagamento={setFormaPagamento}
          valorRecebido={valorRecebido}
          setValorRecebido={setValorRecebido}
        />

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
      </main>
    </div>
  )
}

export default App