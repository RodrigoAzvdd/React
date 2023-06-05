import Button from '../Button'
import Input from '../Input'
import style from './style.module.scss'

export default () => {
    return (
        <div className={style.card}>
            <Button text={"Gerar!"}/>
            <Input />
            <Button text={"Copiar!"}/>
        </div>
    )
}