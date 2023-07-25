export default function EventComponent() {
    const handleClick1 = (e:object) => {
        console.log(e);   
    }
    // 推荐
    const handleClick2 = (num:number,e:object) => {
        console.log(num, e);
    }
    const handleClick3 = (num:number) => {
        return (e:object) => {
            console.log(num,e);
            
        }
    }
    return (
        <>
            <button onClick={handleClick1}>click me</button>
            <br />
            {/* 推荐 */}
            <button onClick={(e) => handleClick2(123, e)}>传参--1</button>
            <br />
            <button onClick={handleClick3(123)}></button>
        </>
    )
}