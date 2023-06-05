import style from './style.module.scss'

export default ({ text }) => {
    return (
        <button className={style.btn}>{text}</button>
    )
}