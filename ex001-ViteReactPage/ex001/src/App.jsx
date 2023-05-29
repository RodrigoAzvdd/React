export default function App() {
  return (
    <>
    <header>
      <img src="react.png" alt="" className="logo" />
      <h1 className="title">React</h1>
      <p className="subtitle">A biblioteca para interfaces de usuários web e nativas</p>
      <button>Aprenda React</button>
      <button>Referência da API</button>
    </header>
    <hr />
    <section className="main-content">
      <h2>Crie interfaces de usuário de componentes</h2>
      <p>React permite que você construa interfacez de usuário a partir
        de pedaços individuais chamados componentes.
      </p>
      <hr />
      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes React são funções JavaScript. 
        A sitaxe de marcação é chamada JSX.
        É uma extensão JavaScript popularizada pelo React.
      </p>
      <hr />
      <h2>Próximos passos:</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novo componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </section>
    
    </>

    
  )
}
