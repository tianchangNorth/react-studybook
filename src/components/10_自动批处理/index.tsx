import { useState } from "react";

export default function Automatic() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        // setCount(count + 1) // 0 + 1
        // setCount(count + 1) // 0 + 1  =》 1
        // setCount(count + 1) // 0 + 1

        setCount(pre => ++pre) // 0 + 1
        setCount(pre => ++pre) // 1 + 1  =》 3
        setCount(pre => ++pre) // 2 + 1
    }
    return (
        <>
            <button onClick={handleClick}>+</button>{count}
        </>
    )
}