import { Fragment } from "react";
import Card from "./components/Card/index.jsx";

export default function App() {
  return (
    <Fragment>
      <Card />
      <Card />
      <Card />
    </Fragment>
    //usar o fragment ou '<> elementos aqui </>'
  )
}