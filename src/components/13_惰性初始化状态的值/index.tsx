import { useState } from "react";
function computed(n:number) {
    console.log('**********');
    return n + 1 + 2 + 3
}
export default function InertState() {
    const [count, setCount] = useState(()=>computed(0)) //惰性初始化状态的值
    const handleClick = () => {
        setCount(count+1)
    }
    return (
        <>
            <button onClick={handleClick}>++</button>
            {count}
        </>
    )
}