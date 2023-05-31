import styles from './style.module.css'

export default (props) => {

    return (
        <div
        //restParam ... p/ passar varias props.
            {...props}
            className={`${styles.wrapper} ${props.className}`}
        >
            {props.children}
        </div>
    )
}