import styled from "styled-components";
import Razor from "../_assets/razor-crossed1.svg";

const Wrapper2 = styled.div`
  display: flex;
  padding: 0 3.2rem;
`;

const Wrapper3 = styled.div`
  display: flex;
  padding: 1.6rem;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

const MainContainer = styled.main`
  position: relative;
  z-index: 1;
`;

const MainTitle = styled.h1`
  font-size: 4.8rem;
  text-align: center;
  align-items: center;
  width: 100%;
  display: flex;
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

const MainSlogan = styled.h2`
  text-align: center;
  font-size: 4.2rem;
  font-weight: 400;
  font-style: italic;
`;

const AppointmentBtn = styled.button`
  font-size: 2rem;
  padding: 1.6rem;
  background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg">\
  <style>@keyframes marching-ants {to {stroke-dashoffset: -15px;}}</style>\
  <rect width="100%" height="100%" style="stroke: yellow; stroke-width: 10px;\ fill: red; stroke-dasharray: 10px 5px; animation: marching-ants .4s\ 
  infinite linear;" /></svg>');
  position: relative;
  z-index: 3;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <Wrapper2>
        <img
          src={Razor}
          alt=""
          className="razor"
          width="40px"
          height="auto"
          title="Straight Razor"
        />
        <MainTitle>Hairitage Barbershop</MainTitle>
        <img
          src={Razor}
          alt=""
          className="razor"
          width="40px"
          height="auto"
          title="Straight Razor"
        />
      </Wrapper2>
      <Wrapper3>
        <AppointmentBtn className="btn" title="Make an Appointment">
          Schedule Appointment Today
        </AppointmentBtn>
      </Wrapper3>
      <MainSlogan>Because Salons Are For Girls</MainSlogan>
    </MainContainer>
  );
};

export default MainContent;
