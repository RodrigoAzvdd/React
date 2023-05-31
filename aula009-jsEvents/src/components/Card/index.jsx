import ProfileImg from '../ProfileImg/index.jsx'
import img from '../../assets/react.svg'
import styles from './style.module.css'
import Button from '../Button/index.jsx'
import Title from '../Title/index.jsx'
import CardSection from './CardSection/index.jsx'

export default (props) => {

    function handleClick() {
        console.log('entrou')
    }

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <ProfileImg className={styles.profileImg} img={img} />
                <Title>
                    {props.name}
                    <Button text={'Follow'} fuction={handleClick} />
                </Title>
            </div>
            <CardSection>{props.bio}</CardSection>
            <CardSection>{props.phoneNumber}</CardSection>
            <CardSection>{props.email}</CardSection>
            <CardSection
                className={styles.socialMedias}
                id="link-section"
            >
                <Button text={'GitHub'} />
                <Button text={'LinkedIn'} />
                <Button text={'Twitter'} />
            </CardSection>
        </div>
    )
}