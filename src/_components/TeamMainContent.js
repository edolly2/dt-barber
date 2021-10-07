import DaTeam from "../_assets/dt-pat-team.jpg";
import ImgFrame from "./ImgFrame";
import PageTitle from "./PageTitle";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 26%;
  height: auto;
  display: flex;
  margin: 0 auto;
`;

const TeamMainContainer = styled.div`
  width: 100%;
  height: 100%;
  //   display: flex;
  //   justify-content: center;
  position: relative;
  z-index: 1;
`;

const TeamMainContent = () => {
  return (
    <TeamMainContainer>
      <PageTitle titleText="Meet Our Team" />
      <Wrapper>
        <ImgFrame imgClass="img" imgSrc={DaTeam} imgAlt="DaTeam" />
      </Wrapper>
    </TeamMainContainer>
  );
};

export default TeamMainContent;
