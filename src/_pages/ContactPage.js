import styled from "styled-components";
import PageTitle from "../_components/PageTitle";

const ContactPageContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <PageTitle titleText="We Would Love To Hear From You!" />
    </ContactPageContainer>
  );
};

export default ContactPage;
