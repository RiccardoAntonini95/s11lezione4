import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MyNavbar = () => {
  return (
    <Nav
    >
      <Nav.Item>
        <Navbar.Brand>
          SpaceFlight News
        </Navbar.Brand>
      </Nav.Item>
      <Nav.Item>
        <Link to={"/"} className="nav-link">
          Home
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default MyNavbar