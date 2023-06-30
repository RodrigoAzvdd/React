import { useState } from "react"

export default function useGameCollection() {
    const [comments, setComments] = useState([])

    const addComment = ({ email, commentContent }) => {
        const id = Math.floor(Math.random() * 100000)
        const comment = { id, email, commentContent }
        setComments(state => [...state, comment])
    }

    return { addComment, comments }
}