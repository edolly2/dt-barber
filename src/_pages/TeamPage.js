import PageTitle from "../_components/PageTitle";
import TeamMainContent from "../_components/TeamMainContent";
import styled from "styled-components";

const TeamPageContainer = styled.div`
  position: relative;
  z-index: 1;
`;

// const Module = styled.div`

// `;

const TeamPage = () => {
  return (
    <TeamPageContainer>
      <TeamMainContent />
    </TeamPageContainer>
  );
};

export default TeamPage;
