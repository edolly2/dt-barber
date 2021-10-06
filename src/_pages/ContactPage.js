import styled from "styled-components";
import ContactMainContent from "../_components/ContactMainContent";

const ContactPageContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactMainContent />
    </ContactPageContainer>
  );
};

export default ContactPage;
