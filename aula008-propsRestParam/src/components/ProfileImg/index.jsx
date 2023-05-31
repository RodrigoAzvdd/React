import styles from './styles.module.css'

export default ({ img }) => {
    return (
        <img className={styles.img} src={img} alt="Profile Img" />
    )
}