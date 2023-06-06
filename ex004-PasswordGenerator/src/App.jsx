import Button from "./components/Button"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Input from "./components/Input"
import LinkButton from "./components/LinkButton"
import Title from "./components/Title"



export default () => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}>
                <section className="main-content" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                    gap: "5rem"

                }}>
                    <Title text={"Gerador de Senhas"} />
                    <Card />
                </section>
                <Footer />
            </div>
        </>
    )
}