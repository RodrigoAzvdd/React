import styles from './styles.module.css'
import posterImg from '../../assets/StarWars-Poster.jpg'
import Button from '../Button'

export default () => {
    return (
        <div className={styles.container}>
            <img className={styles.cardImg} src={posterImg} alt="Poster StarWars" />
            <div className={styles.textContent}>
                <h1 className={styles.title}>Pôster: Star Wars (1977)</h1>
                <p className={styles.infoText}>A nova ilustração de Star Wars: Episódio VII – O despertar da Força é simplesmente fantástica e consegue despertar todos os sentimentos de nostalgia que a franquia precisa.
                    O pôster feito artista Drew Struzan, que ilustrou os pôsteres para as edições especiais da trilogia original e também dos pôsteres para o cinema das três prequels, foi revelado e distribuído para quem assistiu a um dos painéis da D23 Expo.
                </p>
                <Button />
            </div>
        </div>
    )
}