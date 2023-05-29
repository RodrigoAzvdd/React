import Title from './components/Title'
import Subtitle from './components/Subtitle'
import StatusText from "./components/StatusText"
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}
    /*  style recebe um Object >> codigo CSS;
        to fazendo no App.module.css agora;
        style={{
          backgroundColor: '#2c2c2d',
          display: 'grid',
          minHeight: '100vh',
          placeContent: 'center',
          textAlign: 'center'
        }}
    */
    >
      <Title/>
      <Subtitle/>
      <StatusText/>
    </div>
  )
}
