import { useState } from "react"
import style from './style.module.css'
import Comment from "../Comment"


export default function Comments({ lista }) {
    return (
        <div className={style.commentsDiv}>
            <hr />
            {lista.map(comment => (
                <Comment email={lista.email} comment={lista.comment} key={lista.email} />
            ))}
        </div>
    )
}