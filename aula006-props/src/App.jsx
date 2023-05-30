import { Fragment } from "react";
import Card from "./components/Card/index.jsx";
import empire from './assets/Empire.jpg'
import jedi from './assets/Jedi.jpg'
import starwars from './assets/StarWars-Poster.jpg'


export default function App() {
  return (
    <Fragment>
      <Card title='Pôster: Star Wars (1977)' img={starwars}/>
      <Card title='Pôster: Empire Strikes Back (1980)' img={empire}/>
      <Card title='Pôster: Return of the Jedi (1983)' img={jedi}/>
    </Fragment>
    //usar o fragment ou '<> elementos aqui </>'
  )
}