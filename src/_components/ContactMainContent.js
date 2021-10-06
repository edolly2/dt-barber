import styled from "styled-components";
import PageTitle from "./PageTitle";
import Hours from "./Hours";
import ContactInfo from "./ContactInfo";
import Map from "./Map";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const ContactMainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const ContactMainContent = () => {
  return (
    <ContactMainContainer>
      <PageTitle titleText="We Would Love To Hear From You!" />
      <Map />
      <Wrapper>
        <Hours />
        <ContactInfo />
      </Wrapper>
    </ContactMainContainer>
  );
};

export default ContactMainContent;
