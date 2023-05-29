import styles from './App.module.css'
import Title from "./components/Title";
import InfoText from './components/InfoText';
import Button from './components/Button';
import ImgCard from './components/ImgCard';

export default function App(){
  return (
    <div className={styles.container}>
        <ImgCard />
      <div className="textContent">
        <Title />
        <InfoText />
        <Button />
      </div>
    </div>
  )
}