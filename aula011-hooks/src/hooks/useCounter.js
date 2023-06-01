import { useState } from 'react' 

export default function useCounter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    //retorna count com o valor do contador 
    //retorna funcao increment para alterar o valor do count
    //consigo chamar com useCounter.count || useCounter.increment
    return { count, increment }
}