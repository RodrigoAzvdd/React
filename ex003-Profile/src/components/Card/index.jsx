import ProfileImg from '../ProfileImg/index.jsx'
import img from '../../assets/elegante.jpg'
import styles from './style.module.css'
import Button from '../Button/index.jsx'

export default () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <ProfileImg className={styles.profileImg} img={img} />
                <h2>John Doe</h2>
            </div>
            <div className={styles.info}>
                <hr />
                <p>Full-Stack javascript developer at Acme Inc.</p>
                <hr />
                <p>+5511987654321</p>
                <hr />
                <p>john.doe@email.com</p>
                <hr />
            </div>
            <div className={styles.socialMedias}>
                <Button text={'GitHub'} />
                <Button text={'LinkedIn'} />
                <Button text={'Twitter'} />
            </div>
        </div>

    )
}