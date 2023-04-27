import CartSVG from "./assets/CartIcon.svg"

const CartWidget = () => {
    return (
        <div className="m-2">
            <img src={CartSVG} alt="" />
            0
        </div>
    )
}

export default CartWidget;