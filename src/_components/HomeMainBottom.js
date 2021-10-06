import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import Hours from "./Hours";

const MainBottomContainer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  // padding: 3.2rem;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialIconContainer = styled.div`
  margin: 0 3.2rem 3.2rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 420px) {
    margin: 0;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }
`;

const HomeMainBottom = () => {
  return (
    <MainBottomContainer>
      <SocialIconContainer>
        <Hours />
        <ContactInfo />
      </SocialIconContainer>
    </MainBottomContainer>
  );
};

export default HomeMainBottom;
