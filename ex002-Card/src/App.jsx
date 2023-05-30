import styles from './App.module.css'
import Title from "./components/Title";
import InfoText from './components/InfoText';
import Button from './components/Button';
import ImgCard from './components/ImgCard';

export default function App(){
  return (
    <div className={styles.container}>
       <div className={styles.container01}>
        <div className={styles.container02}>
          <ImgCard />
        </div>
        <div className={styles.container03}>
          <Title />
          <InfoText />
          <Button />
        </div>
       </div>
    </div>
  )
}