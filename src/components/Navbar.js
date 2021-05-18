import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarComp = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>wwwmwww</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/puzzles">Puzzles</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
};
export default NavbarComp;