import { useState, useEffect } from "react";
import {obtenerProductos} from "../../asyncMock"
import {ItemList} from "./ItemList/ItemList"

const ItemListContainer = ({ greeting, eslogan }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerProductos()
            .then((respuesta) => {
                setProductos(respuesta)
            })
            .catch((error) => {
                console.log(error)
            })
    })

    return (
        <div className="mt-3 bienvenida d-flex align-items-center justify-content-center">
            <h1 className="philomene text-center">{greeting}<br />
                {eslogan}</h1>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer;