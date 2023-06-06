import Card from "./components/Card"
import Footer from "./components/Footer"
import Title from "./components/Title"
import useGenerate from "./hooks/useGenerate"

export default () => {

    const generate = useGenerate()

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
                    <Card onclickBtn={generate.generatePassword} textInput={generate.password} />
                </section>
                <Footer />
            </div>
        </>
    )
}