import { useEffect, useState } from 'react'
import './App.css'

function Counter() {
  useEffect(() => {
    alert(`Iniciando Busca...`)

    return () => {
      alert("Busca Cancelada!")
    }
  }, [])

  return (
    <div>
      <p>Busca Iniciada...</p>
    </div>
  )
}

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className='div'>
      <h1>UseEffect</h1>
      <label htmlFor="check">Iniciar Buscar</label>
      <input
        type="checkbox"
        id="check"
        value={show}
        onChange={() => {
          setShow(state => !state)
        }}
      />
      {
        show ? <Counter /> : null
      }
    </div>
  )
}

export default App
