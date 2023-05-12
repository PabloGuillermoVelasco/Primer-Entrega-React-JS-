import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, nombre, img, alt, precio, stock}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={alt}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <h4>Precio: ${precio}</h4>
                    <h3>Stock disponible: {stock}</h3>
                </Card.Text>
                <Button variant="primary">Descripción</Button>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;