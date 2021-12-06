import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';


export default function Header(){
    return(
        <Navbar className="leftAlign" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container> 
            <Link href="/" passHref><Navbar.Brand>
                <img
                alt="Mandate Monday Logo"
                src="/images/MandateMondayLogo.svg"
                className="d-inline-block align-top logo-img"
             />
      </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Link href="/" passHref eventKey="1"><Nav.Link>Home</Nav.Link></Link>
                <Link href="/episodes" passHref eventKey="2"><Nav.Link>Episodes</Nav.Link></Link>
                <Link href="/about" passHref eventKey="3"><Nav.Link>About</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}