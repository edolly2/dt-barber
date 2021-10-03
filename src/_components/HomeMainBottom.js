import styled from "styled-components";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import Hours from "./Hours";

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const MainBottomContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 3.2rem;
`;

const SocialIconContainer = styled.div`
  // margin: 0 6.3rem 3.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLocation = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
`;

const MainAddress = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
`;

const MainNumber = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
`;

const HomeMainBottom = () => {
  return (
    <MainBottomContainer>
      <Hours />
      <SocialIconContainer>
        <MainNumber title="Give Us a Call">402-697-1700</MainNumber>
        <MainAddress title="Visit Us Today">1328 S 119th St.</MainAddress>
        <MainLocation>Omaha, Nebraska</MainLocation>
        <Wrapper>
          <AiOutlineFacebook className="icons" title="Follow Us On Facebook" />
          <FiTwitter className="icons" title="Follow Us On Twitter" />
          <FiInstagram className="icons" title="Follow Us On Instagram" />
        </Wrapper>
      </SocialIconContainer>
    </MainBottomContainer>
  );
};

export default HomeMainBottom;
