import React, { useState } from "react";
import { useImmer } from "use-immer";

interface msgItem{
    id: number
    task: string
    checked: boolean
}

interface ListComponentsProps {
    list: msgItem[];
    title: React.ReactElement
    handleCheck:(e:React.ChangeEvent<HTMLInputElement>,id:number)=>void
}

function ListComponents({ list, title, handleCheck }: ListComponentsProps) {
    return (
        <>
            {title}
            <ul>
                {list.map(item => <li key={item.id}><input type="checkBox" checked={item.checked} onChange={(e) => handleCheck(e, item.id)}></input>{item.task}</li>)}
            </ul>
        </>
    )
}

export default function Todos() {

    const [msg, setMsg] = useState("");
    const [todos, setTodos] = useImmer<msgItem[]>([]);
    const uncomputed = todos.filter(item => !item.checked)
    const computed = todos.filter(item => item.checked)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value);
    }

    const handleClick = () => {
        setTodos(draft => {
            draft.push({ id: todos.length, task: msg, checked: false });
        });
        setMsg("");
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        setTodos(draft => {
            draft.find(item => item.id === id)!.checked = e.target.checked;
        });
    }
        return (
            <>
                <input type="text" value={msg} onChange={handleChange} /><button onClick={handleClick} >添加任务</button>
                <ListComponents list={uncomputed} title={<h1>未完成任务数：{uncomputed.length}</h1>} handleCheck={handleCheck} />
                <ListComponents list={computed} title={<h1>已完成任务数：{computed.length}</h1>} handleCheck={handleCheck} />
            </>
        );
    }

