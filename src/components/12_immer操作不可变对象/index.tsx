import { useImmer } from "use-immer";
export default function Immermethods() {
    const [list, setList] = useImmer([
        { id: 1, text: 'aaaaa' },
        { id: 2, text: 'bbbbb' },
        { id: 3, text: 'ccccc' },
        { id: 4, text: 'ddddd' },
    ])
    const handleClick = () => {
        setList(draft=>{draft.push({id:5,text:'eeeee'})})
    }
    return (
        <>
            <button onClick={handleClick}>add list</button>
            {list.map(item => <li key={item.id}>{ item.text}</li>)}
        </>
    )
}