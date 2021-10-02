import styled from "styled-components";

const MainBottomContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBottomNumber = styled.p`
  margin-right: 6.3rem;
  font-size: 2rem;
  color: white;
`;

const MainBottom = () => {
  return (
    <MainBottomContainer>
      <MainBottomNumber>402-402-4022</MainBottomNumber>
    </MainBottomContainer>
  );
};

export default MainBottom;
