import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";


export default function Form({ addComment }) {

    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const handleSubmit = ev => {
        ev.preventDefault()
        addComment({ email, comment })
      }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id={"email"}
                name={"email"}
                label={"Email"}
                type={"text"}
                func={setEmail}
            />

            <Textarea
                id={"comentario"}
                name={"comentario"}
                label={"Comentário"}
                rows={"5"}
                func={setComment}
            />

            <Button text={'Enviar comentário'} />
        </form>
    )
}