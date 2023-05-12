import { useState } from "react"
import "./ItemCount.css";


const ItemCount = ({ inicial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(inicial)

    const suma = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const resta = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
        <div>
            <button className="btn" onClick={resta}>
            -
            </button>
            <h4>{quantity}</h4>
            <button className="btn" onClick={suma}>
            +
            </button>
        </div>
        <div>
            <button className="btn" onClick={() => onAdd(quantity)} disabled = {stock<1}>Agregar al carrito</button>
        </div>
        </>
    )
}



export default ItemCount;