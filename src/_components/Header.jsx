import styled from "styled-components";
import Navigation from "./Navigation";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
