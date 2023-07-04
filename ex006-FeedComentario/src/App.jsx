import './style/App.css'
import Title from "./components/Title"
import useCommentsCollection from './hooks/useCommentsCollection'
import Form from './components/Form'
import CommentArea from './components/CommentArea'

function App() {

  const { comments, addComment } = useCommentsCollection()

  return (
    <div id="App">
      <section className='mainContent'>
        <Title text={"Seção de Comentários"} />
        <Form func={addComment} />
        <CommentArea commentsArray={comments} />
      </section>
    </div>
  )
}

export default App
