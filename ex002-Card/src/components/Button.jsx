import styles from '../App.module.css'

export default () => {
    return (
        <button className={styles.btn} style={{
            width: '150px',
            height: '50px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: 600,
            fontFamily: 'sans-serif',
            backgroundColor: '#000',
            color: '#fff',
            border: '1px solid #000',
            boxShadow: '0px 0px 5px #bebebe',
            cursor: 'pointer'
        }}>
            Comprar agora
        </button>
    )
}