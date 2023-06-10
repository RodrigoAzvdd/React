import { useState } from "react"
import Input from "./components/Input"

function App() {
    const [password, setPassword] = useState("")
    const [copyText, setCopyText] = useState("Copiar")
    const [passwordSize, setPasswordSize] = useState(10)
    const [showInputRod, setShowInputRod] = useState(false)

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
        <div>
            <h1>Gerador de senhas</h1>
            <label htmlFor="showInput">Personalizar tamanho?</label>
            <input onClick={() => setShowInputRod(currentValue => !currentValue)}  type="checkbox" id="showInput" />
            <div>
                <label htmlFor="passwordSize">Tamanho: </label>
                <Input setPasswordSize={setPasswordSize} passwordSize={passwordSize} />
            </div>
            <button onClick={generate}>Gerar senha de {showInputRod ? passwordSize : 8}</button>
            <button onClick={copyToClipboard}>{copyText}</button>
            <div>
                <p>{password}</p>
            </div>
        </div>
    )
}

export default App