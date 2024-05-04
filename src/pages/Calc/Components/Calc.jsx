import "../Styles/Calc.css"
import { useState } from "react"

const Calc = () => {
    const [name , Setname]= useState('')
    return (
        <div className="AddingPlace">
            <div className="input-holder">
                <label htmlFor="name">Project name</label>
                <input type="text" name="name" onChange={(e) => {e.target.value.length < 5 ? alert("no") : alert("yes")}}/>
                <label htmlFor="description">Project description</label>
                <input type="text" name="description"/>

                <input type="file" />

                <input type="submit"/>
            </div>
        </div>
    )
}

export default Calc