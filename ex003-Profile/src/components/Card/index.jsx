import ProfileImg from '../ProfileImg/index.jsx'
import img from '../../assets/react.svg'
import styles from './style.module.css'
import Button from '../Button/index.jsx'

export default (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <ProfileImg className={styles.profileImg} img={img} />
                <h2>{props.name}</h2>
            </div>
            <div className={styles.info}>
                <hr />
                <p>{props.bio}</p>
                <hr />
                <p>{props.phoneNumber}</p>
                <hr />
                <p>{props.email}</p>
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