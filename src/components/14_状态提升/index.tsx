import { useState } from 'react'
interface PropsItem{
    onClick: () => void
    count:number
}
function Button({onClick,count}:PropsItem) {
    return (
        <>
            <button onClick={onClick}>++</button>{count}
        </>
    )
}

export default function Father() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (    
        <>
            <Button onClick={handleClick} count={count}></Button>
            <Button onClick={handleClick} count={count}></Button>
        </>
    )
}