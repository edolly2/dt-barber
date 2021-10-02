import styled from "styled-components";

const MainContainer = styled.main`
  position: relative;
  z-index: 1;
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  text-align: center;
  //   margin-right: 6.2rem;
`;

const MainAddress = styled.p`
  text-align: center;
  margin-right: 6.2rem;
  font-size: 2.4rem;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <MainTitle>Hairitage Barbershop</MainTitle>
      <MainAddress>Omaha, Nebraska</MainAddress>
    </MainContainer>
  );
};

export default MainContent;
