import { useState } from "react";
export default function ImmutableState() {
    const [list, setList] = useState([
        { id: 1, text: 'aaaaa' },
        { id: 2, text: 'bbbbb' },
        { id: 3, text: 'ccccc' },
        { id: 4, text: 'ddddd' },
    ])
    const handleClcik = () => {
        // list.push({ id: 5, text: 'eeeee' })
        // console.log(list);
        //当修改状态的值没有发生改变时，函数组件并不会重新渲染
        //此时list的值已经被直接修改了 setList并没有接收到任何变化
        // setList(list)    
        
        //正确写法
        setList([...list,{id:5,text:'eeeee'}])
    }
    return (
        <>
            {list.map(item => <li key={item.id}>{item.text}</li>)}
            <button onClick={handleClcik}>add listItem</button>
        </>
    )
}