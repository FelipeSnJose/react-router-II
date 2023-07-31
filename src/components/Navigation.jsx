import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const aux = 'ms-3 text-decoration-none'
    const setActiveClass = ({ isActive }) => (isActive ? `text-white ${aux}` : `text-secondary ${aux}`);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
        <NavLink to="/" className="text-white ms-3 text-decoration-none">
            <img
              src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png"
              alt="Home"
              style={{ width: "40px", marginRight: "5px" }}
            />
          </NavLink>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to="/" className={setActiveClass}>Home</NavLink>
          <NavLink to="/pokedex" className={setActiveClass}>Pokedex</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
