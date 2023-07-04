import style from './style.module.css';
import useCommentsCollection from '../../hooks/useCommentsCollection';

export default function Comment({ email, comment, id, creationDate }) {
    const { editComment } = useCommentsCollection();

    const handleEditComment = () => {
        const newCommentContent = prompt("Digite aqui o novo comentário")
        if (newCommentContent !== null) {
            editComment(id, newCommentContent)
        }
    }

    return (
        <div key={id} className={style.section} >
            <p className={style.email}>{email}</p>
            <p className={style.creationDate}>Em {creationDate}</p>
            <p className={style.comment}>{comment}</p>
            <button onClick={ev => {
                ev.preventDefault()
                handleEditComment()
            }}>Editar</button>
        </div>
    );
}
