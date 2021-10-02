import styled from "styled-components";
import Logo from "../_assets/bslogo.svg";

const NavContainer = styled.nav`
  width: 100%;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const NavItem = styled.li`
  margin: 3.2rem;
  font-size: 1.8rem;
`;
const SiteBrand = styled.div`
  max-width: 15rem;
  height: auto;
  background-image: url("../_assets/bslogo.svg");
  background-color: white;
  border-radius: 50%;
  margin: 1.6rem;
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>History</NavItem>
        <NavItem>Services</NavItem>
        <SiteBrand>
          <img src={Logo} alt="" />
        </SiteBrand>
        <NavItem>Our Team</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Appointment</NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
