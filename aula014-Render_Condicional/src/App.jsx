import { useState } from "react"
import Input from "./components/Input"

function App() {
    const [password, setPassword] = useState("")
    const [copyText, setCopyText] = useState("Copiar")
    const [customSize, setCustomSize] = useState(8)
    const [showInput, setShowInput] = useState(false)
    const defaultSize = 8
    const passwordSize = showInput ? customSize : defaultSize

    function generate() {
        const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
        let newPassword = ""
        for (let i = 0; i < passwordSize; i++) {
            const position = Math.floor(Math.random() * characters.length)
            newPassword += characters[position]
        }
        setPassword(newPassword)
        setCopyText("Copiar")
    }

    function copyToClipboard() {
        window.navigator.clipboard.writeText(password)
        setCopyText("Copiado!")
    }

    return (
        <div className="rod">
            <h1>Gerador de senhas</h1>
            <p>
                <label htmlFor="showInput">Personalizar tamanho?</label>
                <input onClick={() => setShowInput(currentValue => !currentValue)} type="checkbox" id="showInput" />
            </p>

            {showInput ? (
                <div>
                    <label htmlFor="passwordSize">Tamanho: </label>
                    <Input setPasswordSize={setCustomSize} passwordSize={customSize} />
                </div>
            ) : null}

            <div>
                <button onClick={generate}>Gerar senha de {showInput ? customSize : padrao}</button>
                <button onClick={copyToClipboard}>{copyText}</button>
            </div>
            <div>
                <p className="p">{password}</p>
            </div>
        </div>
    )
}

export default App