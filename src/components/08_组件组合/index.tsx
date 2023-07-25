interface HeadItem{
    count: number
    msg:string
}
interface Props{
    children: React.ReactElement
    top: React.ReactElement
    bottom:React.ReactElement
}

function Head({count,msg}:HeadItem) {
    return (
        <>
            <p>hello Head!</p>
            {count}
            {msg}
        </>
    )
}

function Welcome({children,top,bottom}:Props) {
    return (
        <>
            {top}
            <p>hello welcome!</p>
            {children}
            {bottom}
        </>
    )
}

export default function Combination() {
    const count = 123
    return (
        <>
            <p>hello combination!</p>
            <Welcome top={<div>aaaaaaaaaaaaaaaaaa</div>} bottom={<div>bbbbbbbbbbbbbbbbbbb</div>}>
                <Head count = {count} msg = 'this is a msg'></Head>
            </Welcome>
        </>
    )
}