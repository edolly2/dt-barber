import styled from "styled-components";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter, FiInstagram } from "react-icons/fi";
// import { BsInstagram } from "react-icons/bs";

const MainBottomContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIconContainer = styled.div`
  // margin: 0 6.3rem 3.2rem 0;
  display: flex;
  gap: 1.6rem;
`;

const MainBottom = () => {
  return (
    <MainBottomContainer>
      <SocialIconContainer>
        <AiOutlineFacebook className="icons" />
        <FiTwitter className="icons" />
        <FiInstagram className="icons" />
      </SocialIconContainer>
    </MainBottomContainer>
  );
};

export default MainBottom;
