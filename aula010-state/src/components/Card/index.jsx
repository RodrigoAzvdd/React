import ProfileImg from '../ProfileImg/index.jsx'
import img from '../../assets/react.svg'
import styles from './style.module.css'
import Button from '../Button/index.jsx'
import Title from '../Title/index.jsx'
import CardSection from './CardSection/index.jsx'
import { useState } from 'react'

let followCheck = false

export default (props) => {
    //[valor, functionModificadora]
    const [followText, setFollowText] = useState("Follow")

    const handleClick = () => {
        if (followCheck == false) {
            followCheck = true
            setFollowText("Following")
        } else {
            followCheck = false
            setFollowText("Follow")
        }

        console.log("entrou")
    }
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <ProfileImg className={styles.profileImg} img={img} />
                <Title>
                    {props.name}
                    <Button text={followText} fuction={handleClick} />
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