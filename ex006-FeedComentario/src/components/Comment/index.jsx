export default function Comment ({ email, comment, id }) {
    return (
        <div key={id} >
            <p>Email: {email}</p>
            <p>Comentário: {comment}</p>
        </div>
    )
}