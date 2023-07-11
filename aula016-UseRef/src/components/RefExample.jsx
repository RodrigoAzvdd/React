import { useRef } from "react"

export default function RefExample() {
    
    const inputRef = useRef(null)

    const handleCLick = () => {
        inputRef.current.focus()
    }
    
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleCLick}>Focar no input</button>
        </div>
    )
}