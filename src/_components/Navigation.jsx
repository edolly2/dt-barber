import styled from "styled-components";
import Logo from "../_assets/shield.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  // background: white;
  padding: 3.2rem 0;
  // position: relative;
  // background-clip: "img";
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const NavItem = styled.li`
  // margin: 3.2rem;
  font-size: 2.2rem;
  font-weight: 900;
  font-family: "Victorian";
  text-shadow: 1px 1px 1px white, -1px -1px 1px white, 1px -1px 1px white,
    -1px 1px 1px white, 0 1px 1px white, 1px 0 1px white, 0 0 1px white,
    0 -1px 1px white, -1px 0 1px white, 3px 3px 1px red, -3px 3px 1px red,
    3px -3px 1px red, -3px -3px 1px red, 3px 2px 1px red, 2px 3px 1px red,
    2px 2px 1px red, 2px -3px 1px red, -3px 2px 1px red, 3px -2px 1px red,
    -2px 3px 1px red, -2px -2px 1px red, -3px -2px 1px red, -2px -3px 1px red,
    -2px -1px 1px red, -1px -2px 1px red, -1px 2px 1px red, 2px -1px 1px red,
    1px -2px 1px red, -2px 1px 1px red, 2px 1px 1px red, 1px 2px 1px red,
    1px 3px 1px red, 3px 1px 1px red, -3px 1px 1px red, 1px -3px 1px red,
    -1px 3px 1px red, 3px -1px 1px red, -1px -3px 1px red, -3px -1px 1px red;
`;
const SiteBrand = styled.div`
  max-width: 15rem;
  height: auto;
  // background-color: white;
  border-radius: 50%;
  // margin: 0 auto;
  // display: flex;
  // position: absolute;
  // left: 50%;
  // transform: translate(-50%);
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem className="links" title="Home">
          <Link to="/" className="links">
            Home
          </Link>
        </NavItem>
        <NavItem className="links" title="Our History">
          <Link to="/history" className="links">
            History
          </Link>
        </NavItem>
        <NavItem className="links" title="Our Services">
          <Link to="/services" className="links">
            Services
          </Link>
        </NavItem>
      </NavList>
      <SiteBrand>
        <Link to="/">
          <img
            src={Logo}
            alt=""
            width="600px"
            height="auto"
            title="Hairitage Barbershop"
          />
        </Link>
      </SiteBrand>
      <NavList>
        <NavItem className="links" title="Our Team">
          <Link to="/our-team" className="links">
            Our Team
          </Link>
        </NavItem>
        <NavItem className="links" title="Contact Us">
          <Link to="/contact" className="links">
            Contact
          </Link>
        </NavItem>
        <NavItem className="links" title="Make an Appointment">
          <Link to="/appointment" className="links">
            Make an Appointment
          </Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
