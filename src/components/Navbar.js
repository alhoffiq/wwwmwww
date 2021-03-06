import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComp = () => {
    const location = useLocation();

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>wwwmwww</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                <Link to="/puzzles" className={location.pathname === "/puzzles" ? "nav-link active" : "nav-link"}>Puzzles</Link>
                <NavDropdown title="Shop">
                    <NavDropdown.Header>Twisty Puzzles</NavDropdown.Header>
                    <NavDropdown.Divider />
					<NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.shapeways.com/shops/wwwmwww">Shapeways</NavDropdown.Item>
					<NavDropdown.Item target="_blank" rel="noreferrer" href="https://i.materialise.com/en/shop/designer/carl-hoff">i.materialise</NavDropdown.Item>
                    <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.grigorusha.com/carl-puzzles">Grigorusha</NavDropdown.Item>
                    <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.hknowstore.com/categoryofcorp.aspx?search=bubbloid">HK Now Store</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Header>Puzzle Rings</NavDropdown.Header>
                    <NavDropdown.Divider />
                    <NavDropdown.Item target="_blank" rel="noreferrer" href="https://puzzleringmaker.com/index.php?ref=item&id=97">WOW5</NavDropdown.Item>
                    <NavDropdown.Item target="_blank" rel="noreferrer" href="https://puzzleringmaker.com/index.php?ref=item&id=326">WOW5 Lite</NavDropdown.Item>
                    <NavDropdown.Item target="_blank" rel="noreferrer" href="https://puzzleringmaker.com/index.php?ref=item&id=1337">WOW5 Multi-Tone</NavDropdown.Item>
                    <NavDropdown.Item target="_blank" rel="noreferrer" href="https://puzzleringmaker.com/index.php?ref=item&id=336">Wasp</NavDropdown.Item>
					<NavDropdown.Divider />
                    <NavDropdown.Header>Packing Puzzles</NavDropdown.Header>
                    <NavDropdown.Divider />
					<NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.chewiescustompuzzles.com/puzzleshop/carl-hoff-puzzles">Chewies Custom Puzzles</NavDropdown.Item>
                    <NavDropdown.Item target="_blank" rel="noreferrer" href="http://www.gamepuzzles.com/tiling4.htm#HPv">Hex-Pave</NavDropdown.Item>
					<NavDropdown.Divider />
                    <NavDropdown.Header>Puzzle Stickers</NavDropdown.Header>
                    <NavDropdown.Divider />
                    <NavDropdown.Item target="_blank" rel="noreferrer" href="https://oliverstickers.com/carl-hoff-wwwmwww">Oliver's Stickers</NavDropdown.Item>
                </NavDropdown>
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
            </Nav>
        </Navbar>
    );
};
export default NavbarComp;