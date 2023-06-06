import Button from '../Button'
import Input from '../Input'
import style from './style.module.scss'

export default ({onclickBtn, textInput}) => {
    return (
        <div className={style.card}>
            <Button onClick={onclickBtn}  text={"Gerar!"}/>
            <Input text={textInput} />
            <Button text={"Copiar!"}/>
        </div>
    )
}