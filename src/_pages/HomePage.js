import styled from "styled-components";
import HomeMainContent from "../_components/HomeMainContent";
import HomeMainBottom from "../_components/HomeMainBottom";

const HomePageContainer = styled.div``;

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomeMainContent />
      <HomeMainBottom />
    </HomePageContainer>
  );
};

export default HomePage;
