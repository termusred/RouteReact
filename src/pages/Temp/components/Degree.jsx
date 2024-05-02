import { useState } from "react"
import "../styles/degree.css"

const Main = () => {
    const [degree , setDegree] = useState(0)
    const [color , setColor] = useState("aqua")
    function Up() {
        setDegree(degree + 1)
    }
    function Down() {
        setDegree(degree - 1)
    }
    return (
        <div className="Remote">
            <div className="Con1"><div className={degree > 14 ? "orange" : "aqua"}><h1>{degree}</h1></div></div>
            <div className="Con2">
                <button className="btn btn-primary" onClick={Up}>+</button>
                <button className="btn btn-primary" onClick={Down}>-</button>
            </div>
        </div>
    )
}

export default Main