import styled from "styled-components";
import PageTitle from "../_components/PageTitle";

const AboutUsMainContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const AboutUs = () => {
  return (
    <AboutUsMainContainer>
      <PageTitle titleText="Our Rich History"></PageTitle>
    </AboutUsMainContainer>
  );
};

export default AboutUs;
