import style from './style.module.css'

export default function Input ({ label, name, id, type }) {
    return (
        <div className={style.inputArea}>
            <label className={style.label} htmlFor={name}>{label}</label>
            <input className={style.input} type={type} name={name} id={id} />
        </div>
    )
}