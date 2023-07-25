//对象写法
const Qo = {
    Welcome() {
        return (
            <div>i'm welcome</div>
        )
    }
}

//函数写法
const Qf = () => {
    return (
        <div>i'm Qf</div>
    )
}

Qf.Welcome = () => {
    return (
        <div>i'm welcome</div>
    )
}

export default function Dianbiaoji(){
    return (
        <>
            <Qo.Welcome></Qo.Welcome>
            <Qf></Qf>
            <Qf.Welcome></Qf.Welcome>
        </>
    )
}