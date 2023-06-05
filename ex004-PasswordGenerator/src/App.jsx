import Button from "./components/Button"
import Card from "./components/Card"
import Input from "./components/Input"
import Title from "./components/Title"



export default () => {
    return (
        <div className="app" style={{
            display: "grid",
            placeContent: "center",
            textAlign: "center",
            gap: "5rem",
            minHeight: "100vh"
        }}>
            <Title text={"Gerador de Senhas"}/>
            <Card />
        </div>
    )
}