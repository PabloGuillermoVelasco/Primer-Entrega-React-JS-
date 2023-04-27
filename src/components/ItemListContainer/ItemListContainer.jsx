const ItemListContainer = ({greeting, eslogan}) => {
    return (
        <div className="mt-3 bienvenida d-flex align-items-center justify-content-center">
            <h1 className="philomene text-center">{greeting}<br />
            {eslogan}</h1>
        </div>
    )
}

export default ItemListContainer;