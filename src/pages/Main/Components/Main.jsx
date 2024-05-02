import axios from "axios"
import { useState , useEffect} from "react"
import "../Style/Main.css"

const Main = () => {
    const [product , setProduct] = useState([])
    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products").then((data) => setProduct(data.data))
    }, [])
    return(
        <div>
            <h1>Main Page</h1>
            <div className="Container">
                {product.map((el) => {
                    return (
                    <div className="card">
                        <img src={el.image} alt="Bruh" className="Card-img"/>
                        <div className="card-title">{el.title}</div>
                        <div className="card-desc">{el.description}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main