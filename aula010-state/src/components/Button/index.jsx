import styles from './styles.module.css'

export default ({ text, fuction }) => {
    return (
        <button onClick={fuction} className={styles.btn}>{text}</button>
    )
}