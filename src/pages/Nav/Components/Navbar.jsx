import {Link} from "react-router-dom"
import "../Styles/nav.css"

const Nav = () =>{
    return (
        <nav>
            <con1>
                <Link to="/">Main</Link>
                <Link to="/Temp">Temp</Link>
                <Link to="/Calc">Calc</Link>
            </con1>
            <con2>
                <Link to="/Login">Login</Link>
            </con2>
        </nav>
    )
}

export default Nav