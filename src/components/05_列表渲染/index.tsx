export default function ListComponents() {
    const list = [
        { id: 0, text: 'aaa' },
        { id: 1, text: 'bbb' },
        { id: 2, text: 'ccc' },
    ]
    return (
        <>
            {list.map((item)=> <li key={item.id}>{item.text}</li>)}
        </>
    )
}