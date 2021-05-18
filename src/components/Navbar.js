import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComp = () => {
    const location = useLocation();

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Andrew Hoff</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                <Link to="/puzzles" className={location.pathname === "/puzzles" ? "nav-link active" : "nav-link"}>Puzzles</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
            </Nav>
        </Navbar>
    );
};
export default NavbarComp;