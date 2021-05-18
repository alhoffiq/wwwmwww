import Card from 'react-bootstrap/Card';
import image from '../assets/images/placeholder-cube.jpg';

function CardComp() {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Puzzle Name</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus orci ac auctor augue mauris augue neque gravida.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComp;