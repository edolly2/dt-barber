import styled from "styled-components";
import PageTitle from "../_components/PageTitle";

const TeamPageContainer = styled.div`
  position: relative;
  z-index: 1;
`;

// const Module = styled.div`

// `;

const TeamPage = () => {
  return (
    <TeamPageContainer>
      <PageTitle titleText="Meet Our Team" />
    </TeamPageContainer>
  );
};

export default TeamPage;
