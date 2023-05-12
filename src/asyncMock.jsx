const productos = [
    {id:1, nombre: "Organikal Matcha", img: "./assets/productos/organikal_matcha.jpg", alt:"matcha", precio:2500, stock:15},
    {id:2, nombre: "Chocolatada de almendras", img:"./assets/productos/bebida_de_almendras_chocolatada.jpg", alt:"chocolatada de almendras", precio:800, stock:10},
    {id:3, nombre: "Aceite de coco neutro", img:"aceite_de_coco_neutro.jpg", alt:"aceite de coco", precio: 3000, stock:20}
]

export const obtenerProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },2000)
    }
)}

