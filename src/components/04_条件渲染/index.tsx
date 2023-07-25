export default function Conditions() {
    const count = 1
    const obj = {
        a: 1,
        b: 2
    }
    return (
        <>
            {count > 0 ? <div>hello raect!</div> : <div>hello javascript!</div>}
            {count > 1 && <div>hello openatom</div>}
            {JSON.stringify(obj)}
        </>
    )
}