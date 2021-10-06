import styled from "styled-components";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter, FiInstagram } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 1.6rem;
`;

const MainLocation = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
`;

const MainAddress = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
`;

const MainNumber = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
`;

const ContactInfo = () => {
  return (
    <Wrapper2>
      <MainNumber title="Give Us a Call">402-697-1700</MainNumber>
      <MainAddress title="Visit Us Today">1328 S 119th St.</MainAddress>
      <MainLocation>Omaha, Nebraska</MainLocation>
      <Wrapper>
        <AiOutlineFacebook className="icons" title="Follow Us On Facebook" />
        <FiTwitter className="icons" title="Follow Us On Twitter" />
        <FiInstagram className="icons" title="Follow Us On Instagram" />
      </Wrapper>
    </Wrapper2>
  );
};

export default ContactInfo;
