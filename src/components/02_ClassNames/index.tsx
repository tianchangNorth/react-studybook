import classNames from "classnames"
export default function ClassNames() {
    const myClass = classNames({
        box1: true,
        box2:false
    })
    return (
        <div className={myClass}></div>
    )
}