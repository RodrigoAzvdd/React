import { useState } from "react"

export default function useCommentsCollection() {
    const [comments, setComments] = useState([])

    const editComment = (id, newCommentContent) => {
        setComments((state) => {
            const updatedComments = state.map((comment) => {
                if (comment.id === id) {
                    return {
                        ...comment,
                        commentContent: newCommentContent,
                    };
                }
                return comment
            });
            return updatedComments
        });
    };
    
    
    

    const addComment = (email, commentContent) => {
        const id = Math.floor(Math.random() * 100000)
        const currentDate = new Date();
        const creationDate = `${currentDate.toLocaleDateString('pt-BR')} ${currentDate.toLocaleTimeString('pt-BR')}`
        const comment = { id, email, commentContent, creationDate }

        setComments((state) => {
            const newCommentsArray = [comment, ...state]
            return newCommentsArray
        })
    }

    return { addComment, editComment, comments }
}