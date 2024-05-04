import {Link} from "react-router-dom"
import "../Styles/nav.css"

const Nav = () =>{
    return (
        <nav>
            <con1>
                <Link to="/">AboutUs</Link>
                <Link to="/Temp">Fiels</Link>
                <Link to="/Calc">Add new fiel</Link>
            </con1>
            <con2>
                <Link to="/Login">Login</Link>
            </con2>
        </nav>
    )
}

export default Nav