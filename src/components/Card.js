import Card from 'react-bootstrap/Card';

function CardComp({ name, description, image }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComp;