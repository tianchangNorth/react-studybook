import {useState} from 'react'
export default function ComputedState() {
    const [count, setCount] = useState(0)
    const doubleCount = count * 2
    const tdouble = doubleCount * 2
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={handleClick}>计数</button>
            <br />
            {count}
            <br />
            {doubleCount}
            <br />
            {tdouble}
        </>
    )
}