import styled from "styled-components";
import Logo from "../_assets/bslogo.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const NavItem = styled.li`
  // margin: 3.2rem;
  font-size: 1.8rem;
`;
const SiteBrand = styled.div`
  max-width: 15rem;
  height: auto;
  background-color: white;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem className="links">
          <Link to="/" className="links">
            Home
          </Link>
        </NavItem>
        <NavItem className="links">
          <Link to="/history" className="links">
            History
          </Link>
        </NavItem>
        <NavItem className="links">
          <Link to="/services" className="links">
            Services
          </Link>
        </NavItem>
      </NavList>
      <SiteBrand>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </SiteBrand>
      <NavList>
        <NavItem className="links">
          <Link to="/our-team" className="links">
            Our Team
          </Link>
        </NavItem>
        <NavItem className="links">
          <Link to="/contact" className="links">
            Contact
          </Link>
        </NavItem>
        <NavItem className="links">
          <Link to="/appointment" className="links">
            Make an Appointment
          </Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
