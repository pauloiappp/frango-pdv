import { useState } from "react"
import "./App.css"

import FormVenda from "./components/FormVenda"
import Cupom from "./components/Cupom"

function App() {
  const [cliente, setCliente] = useState("")
  const [produto, setProduto] = useState("Frango inteiro")
  const [quantidadeFrangos, setQuantidadeFrangos] = useState("")
  const [pesoKg, setPesoKg] = useState("")
  const [precoKg, setPrecoKg] = useState("")
  const [valor, setValor] = useState("")
  const [itens, setItens] = useState([])
  const [formaPagamento, setFormaPagamento] = useState("Dinheiro")
  const [valorRecebido, setValorRecebido] = useState("")
  const [numeroCupom, setNumeroCupom] = useState(1)

  const total = itens.reduce((soma, item) => soma + item.valor, 0)
  const troco = Number(valorRecebido) - total

  function atualizarPeso(novoPeso) {
    setPesoKg(novoPeso)

    if (novoPeso && precoKg) {
      const valorCalculado = Number(novoPeso) * Number(precoKg)
      setValor(valorCalculado.toFixed(2))
    }
  }

  function atualizarPrecoKg(novoPrecoKg) {
    setPrecoKg(novoPrecoKg)

    if (pesoKg && novoPrecoKg) {
      const valorCalculado = Number(pesoKg) * Number(novoPrecoKg)
      setValor(valorCalculado.toFixed(2))
    }
  }

  function adicionarItem() {
    if (!pesoKg || !valor) return

    if (produto === "Frango inteiro" && !quantidadeFrangos) return

    const novoItem = {
      produto,
      quantidadeFrangos: Number(quantidadeFrangos) || 0,
      pesoKg: Number(pesoKg),
      precoKg: Number(precoKg) || 0,
      valor: Number(valor)
    }

    setItens([...itens, novoItem])
    setQuantidadeFrangos("")
    setPesoKg("")
    setPrecoKg("")
    setValor("")
  }

  function removerItem(index) {
    const novaLista = itens.filter((item, itemIndex) => itemIndex !== index)
    setItens(novaLista)
  }

  function imprimirCupom() {
    window.print()
    setNumeroCupom(numeroCupom + 1)
  }

  return (
    <div className="app">
      <header className="topo">
        <div>
          <h1>Dennys Frango</h1>
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
          atualizarPeso={atualizarPeso}
          precoKg={precoKg}
          atualizarPrecoKg={atualizarPrecoKg}
          valor={valor}
          setValor={setValor}
          adicionarItem={adicionarItem}
          formaPagamento={formaPagamento}
          setFormaPagamento={setFormaPagamento}
          valorRecebido={valorRecebido}
          setValorRecebido={setValorRecebido}
        />

        <Cupom
          numeroCupom={numeroCupom}
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