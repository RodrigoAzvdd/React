export default function Comment ({email, comment}) {
    return (
        <div className="comments">
            <p>{email}</p>
            <p>{comment}</p>
        </div>
    )
}