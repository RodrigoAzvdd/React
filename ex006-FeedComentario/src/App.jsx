import './style/App.css'
import Button from "./components/Button"
import Input from "./components/Input"
import Textarea from "./components/Textarea"
import Title from "./components/Title"
import Comments from './components/CommentsSection'
import useAddComment from './hooks/useAddComment'
import Form from './components/Form'

function App() {

  const { comments, addComment } = useAddComment()

  return (
    <div id="App">

      <section className='mainContent'>
        <Title text={"Seção de Comentários"} />

        <Form addComment={addComment} />

        <Comments lista={comments}/>

      </section>
    </div>
  )
}

export default App
