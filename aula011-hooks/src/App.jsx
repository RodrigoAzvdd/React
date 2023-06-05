import './App.css'
import useCounter from './hooks/useCounter'
function App() {

  //usando o hook criado
  const counter = useCounter()

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* usando o hook criado */}
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
