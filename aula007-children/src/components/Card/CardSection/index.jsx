import styles from './style.module.css'

export default (props) => {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}