import { useState } from "react";
export default function StateComponents() { 
    const [count, setCount] = useState(1)
    const handleClick = () => {
        setCount(pre => ++pre )
        console.log(count);
        
    }
    return (
        <>
        {count}<button onClick={handleClick}>+++</button>
        </>
    )
}