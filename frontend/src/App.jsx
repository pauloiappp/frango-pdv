import { useState } from "react"

function App() {
  const [cliente, setCliente] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [valor, setValor] = useState("")
  const [itens, setItens] = useState([])

  function adicionarItem() {
    if (!quantidade || !valor) return
function imprimirCupom() {
  window.print()
}
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
  const total = itens.reduce((soma, item) => soma + item.valor, 0)

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: "30px", fontFamily: "Arial" }}>
      <div>
  <h1
    style={{
      fontSize: "38px",
      marginBottom: "5px",
      color: "#4126dc"
    }}
  >
    Denis Frango 
  </h1>

  <p
    style={{
      color: "#6b7280",
      marginBottom: "20px"
    }}
  >
    Abatedor de Frango
  </p>
</div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", width: "400px" }}>
          <h2>Nova Venda</h2>

          <input type="text" placeholder="Nome do cliente" value={cliente} onChange={(e) => setCliente(e.target.value)} style={inputStyle} />
          <input type="number" placeholder="Quantidade (kg)" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} style={inputStyle} />
          <input type="number" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)} style={inputStyle} />

          <button style={botaoStyle} onClick={adicionarItem}>
            Adicionar
          </button>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "12px", flex: 1 }}>
          <h2>Cupom / Venda</h2>
          <p><strong>Cliente:</strong> {cliente || "Não informado"}</p>

<p>
  <strong>Data:</strong>{" "}
  {new Date().toLocaleDateString()}
</p>

          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                <th style={thStyle}>Produto</th>
                <th style={thStyle}>Qtd</th>
                <th style={thStyle}>Valor</th>
              </tr>
            </thead>

            <tbody>
              {itens.map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.produto}</td>
                  <td style={tdStyle}>{item.quantidade} kg</td>
                  <td style={tdStyle}>R$ {item.valor.toFixed(2).replace(".", ",")}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ marginTop: "30px", textAlign: "right" }}>
            Total: R$ {total.toFixed(2).replace(".", ",")}
          </h2>

          <button
  style={{ ...botaoStyle, background: "#2563eb" }}
  onClick={imprimirCupom}
>
  Imprimir Cupom
</button>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "16px"
}

const botaoStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "15px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer"
}

const thStyle = { padding: "12px", borderBottom: "1px solid #e5e7eb", textAlign: "left" }
const tdStyle = { padding: "12px", borderBottom: "1px solid #f1f5f9" }

export default App