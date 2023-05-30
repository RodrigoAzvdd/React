import ProfileImg from '../ProfileImg/index.jsx'
import img from '../../assets/react.svg'
import styles from './style.module.css'
import Button from '../Button/index.jsx'
import Title from '../Title/index.jsx'
import CardSection from './CardSection/index.jsx'

export default (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <ProfileImg className={styles.profileImg} img={img} />
                <Title>
                    {props.name}
                    <span><Button text={'Follow'} /></span>
                </Title>
            </div>
            <div className={styles.info}>
                <CardSection>{props.bio}</CardSection>
                <CardSection>{props.phoneNumber}</CardSection>
                <CardSection>{props.email}</CardSection>
            </div>
            <div className={styles.socialMedias}>
                <Button text={'GitHub'} />
                <Button text={'LinkedIn'} />
                <Button text={'Twitter'} />
            </div>
        </div>
    )
}