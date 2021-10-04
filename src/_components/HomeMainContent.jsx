import styled from "styled-components";
import PageTitle from "./PageTitle";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper2 = styled.div`
  display: flex;
  padding: 1.6rem;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  z-index: 3;
  margin: 3.2rem 0;
`;

const MainContainer = styled.main`
  position: relative;
  z-index: 1;
`;

const MainSlogan = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 200;
  color: white;
  font-style: italic;
  border-bottom: 2px solid white;
  width: 50%;
`;

const AppointmentBtn = styled.button`
  font-size: 2rem;
  padding: 1.6rem;
  // background: url('data:image/svg+xml,\
  // <svg xmlns="http://www.w3.org/2000/svg">\
  // <style>@keyframes marching-ants {to {stroke-dashoffset: -15px;}}</style>\
  // <rect width="100%" height="100%" style="stroke: yellow; stroke-width: 2px;\ fill: red; stroke-dasharray: 10px 5px; animation: marching-ants .4s\
  // infinite linear;" /></svg>');
  position: relative;
  border-radius: 0.8rem;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0 12.5%,
    rgba(255, 255, 255, 1) 0 25%,
    rgba(0, 4, 255, 1) 0 37.5%,
    rgba(255, 255, 255, 1) 0 50%,
    rgba(255, 0, 0, 1) 0 62.5%,
    rgba(255, 255, 255, 1) 0 75%,
    rgba(0, 4, 255, 1) 0 87.5%,
    rgba(255, 255, 255, 1) 0
  );
  z-index: 3;
`;

const HomeMainContent = () => {
  return (
    <MainContainer>
      <PageTitle titleText="Hairitage Barbershop" />
      <Wrapper>
        <MainSlogan>"Because salons are for girls..."</MainSlogan>
      </Wrapper>
      <Wrapper2>
        <AppointmentBtn className="btn" title="Make an Appointment">
          Schedule Appointment Today
        </AppointmentBtn>
      </Wrapper2>
    </MainContainer>
  );
};

export default HomeMainContent;
