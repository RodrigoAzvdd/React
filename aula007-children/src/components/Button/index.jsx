import styles from './styles.module.css'

export default ({ text }) => {
    return (
        <button className={styles.btn}>{text}</button>
    )
}