import './style/App.css'
import Title from "./components/Title"
import useCommentsCollection from './hooks/useCommentsCollection'
import Form from './components/Form'
import CommentArea from './components/CommentArea'

function App() {

  const { comments, addComment } = useCommentsCollection()

  function editComment() {
    console.log(comments)
    comments.forEach((comment) => {
      console.log(comment)
    })
  }

  return (
    <div id="App">
      <section className='mainContent'>
        <Title text={"Seção de Comentários"} />
        <Form func={addComment} />
        <CommentArea commentsArray={comments} />
        <button onClick={editComment}>Editar</button>
      </section>
    </div>
  )
}

export default App
