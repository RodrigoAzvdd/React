import { useRef, useState } from 'react'
import './App.css'

function App() {

  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      Variable: ${variable}
      State: ${state}
      Ref: ${ref.current}
    `)
  }

  return (
    <div className='div'>
      <h2>UseRef</h2>
      <section>
        <hr />
        <p>
          Variavel: {variable}
          <button onClick={() => variable++}>
            Aumentar Variavel
          </button>
        </p>
        <p>
          State: {state}
          <button onClick={() => { setState(state => state + 1) }}>
            Aumentar State
          </button>
        </p>
        <p>
          Ref: {ref.current}
          <button onClick={() => ref.current++}>
            Aumentar Ref
          </button>
        </p>
      </section>
      <button onClick={showValues}>Exibir valores</button>
    </div>
  )
}

export default App
