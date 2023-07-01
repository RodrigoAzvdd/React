import './style/App.css'
import Title from "./components/Title"
import useAddComment from './hooks/useAddComment'
import Form from './components/Form'
import Comment from './components/Comment'

function App() {

  const { comments, addComment } = useAddComment()

  return (
    <div id="App">
      <section className='mainContent'>
        <Title text={"Seção de Comentários"} />
        <Form func={addComment} />
        <div className="comments" >
          {comments.map(comment => (
            <Comment comment={comment.commentContent} email={comment.email} id={comment.id} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
