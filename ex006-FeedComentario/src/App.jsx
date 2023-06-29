import './style/App.css'
import Button from "./components/Button"
import Input from "./components/Input"
import Textarea from "./components/Textarea"
import Title from "./components/Title"

function App() {
  return (
    <div id="App">

      <section className='mainContent'>
        <Title text={"Seção de Comentários"} />

        <Input
          id={"email"}
          name={"email"}
          label={"Email"}
          type={"text"}
        />

        <Textarea
          id={"comentario"}
          name={"comentario"}
          label={"Comentário"}
          rows={"5"}
        />

        <Button text={'Enviar comentário'} />
      </section>

    </div>
  )
}

export default App
