import styled from "styled-components";
import Razor from "../_assets/razor-crossed1.svg";

const Wrapper = styled.div`
  margin-top: 12rem;
`;

const Wrapper2 = styled.div`
  display: flex;
  padding: 0 3.2rem;
`;

const Wrapper3 = styled.div`
  display: flex;
  width: fit-content;
  padding: 1.6rem;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainContainer = styled.main`
  position: relative;
  z-index: 1;
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  text-align: center;
`;

const MainLocation = styled.p`
  text-align: center;
  font-size: 2.4rem;
  color: red;
`;

const MainSlogan = styled.h2`
  text-align: center;
  align-items: center;
  width: 100%;
  display: flex;
  font-size: 4.8rem;
  text-shadow: 1px 1px 1px white, -1px -1px 1px white, 1px -1px 1px white,
    -1px 1px 1px white, 0 1px 1px white, 1px 0 1px white, 0 0 1px white,
    0 -1px 1px white, -1px 0 1px white, 3px 3px 1px red,
    -3px 3px 1px red, 3px -3px 1px red,
    -3px -3px 1px red, 3px 2px 1px red,
    2px 3px 1px red, 2px 2px 1px red,
    2px -3px 1px red, -3px 2px 1px red,
    3px -2px 1px red, -2px 3px 1px red,
    -2px -2px 1px red, -3px -2px 1px red,
    -2px -3px 1px red, -2px -1px 1px red,
    -1px -2px 1px red, -1px 2px 1px red,
    2px -1px 1px red, 1px -2px 1px red,
    -2px 1px 1px red, 2px 1px 1px red,
    1px 2px 1px red, 1px 3px 1px red,
    3px 1px 1px red, -3px 1px 1px red,
    1px -3px 1px red, -1px 3px 1px red,
    3px -1px 1px red, -1px -3px 1px red,
    -3px -1px 1px red;
}
  &::before,
  &::after {
    content: "";
    flex: 1;
    background: white;
    height: 0.2rem;
    margin: 0.8rem;
  }
`;

const MainAddress = styled.p`
  text-align: center;
  font-size: 2.4rem;
  color: red;
`;

const MainNumber = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
`;

const AppointmentBtn = styled.button`
  font-size: 2rem;
  padding: 0.4rem 1.6rem;
  background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg">\
  <style>@keyframes marching-ants {to {stroke-dashoffset: -15px;}}</style>\
  <rect width="100%" height="100%" style="stroke: yellow; stroke-width: 10px;\ fill: red; stroke-dasharray: 10px 5px; animation: marching-ants .4s\ 
  infinite linear;" /></svg>');
  cursor: pointer;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const MainContent = () => {
  return (
    <MainContainer>
      {/* <MainTitle>Hairitage Barbershop</MainTitle> */}
      <MainLocation>-Omaha, Nebraska-</MainLocation>
      <Wrapper2>
        <img src={Razor} alt="" className="razor" />
        <MainSlogan>Because Salons Are For Girls</MainSlogan>
        <img src={Razor} alt="" className="razor" />
      </Wrapper2>
      <Wrapper>
        <Wrapper3>
          <AppointmentBtn>Schedule Appointment Today</AppointmentBtn>
        </Wrapper3>
        <MainNumber>402-697-1700</MainNumber>
        <MainAddress>1328 S 119th St.</MainAddress>
      </Wrapper>
    </MainContainer>
  );
};

export default MainContent;
