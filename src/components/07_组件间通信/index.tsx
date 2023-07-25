interface Props{
    msg: string
    count: number
    onClick: () => void
    getData:(data:string)=> void
}
ChildComponent.defaultProps = {
    msg: 'xxxx',
    count: 111111,
    onClick: () => { },
    getData:() => {}
}
function ChildComponent({ msg, count, onClick ,getData}: Props) {
    getData('我是子组件数据')
    return (
        <div onClick={onClick}>
            {msg}
            <br />
            {count}
        </div>
    )
}

export default function FatherComponent() {
    const count = 123
    const handleClick = () => {
        console.log('123');
    }
    const getData = (data:string) => {
        console.log(data);
        
    }
    return (
        <>
        <ChildComponent msg = 'hello ChildComponent' count = {count} onClick={handleClick} getData = {getData}></ChildComponent>
        </>
    )
}