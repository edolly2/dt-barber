import styled from "styled-components";

const HoursContainer = styled.div`
  border: 2px solid white;
  text-align: center;
  padding: 0 1.6rem;
  background: rgba(255, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  margin: 0 0 3.2rem 3.3rem;
`;

const HoursTitle = styled.h3`
  font-size: 2.2rem;
  color: white;
  //   text-align: center;
  border-bottom: 2px solid white;
  padding: 1.6rem 0;
`;

const HoursList = styled.ul`
  padding: 1.6rem 0;
`;

const HoursListItem = styled.li`
  color: red;
  font-size: 2rem;
`;

const Hours = () => {
  return (
    <HoursContainer>
      <HoursTitle>Service Hours</HoursTitle>
      <HoursList>
        <HoursListItem>Monday | CLOSED</HoursListItem>
        <HoursListItem>Tuesday | 8:30AM-6PM</HoursListItem>
        <HoursListItem>Wednesday | 8:30AM-6PM</HoursListItem>
        <HoursListItem>Thursday | 8:30AM-6PM</HoursListItem>
        <HoursListItem>Friday | 8:30AM-6PM</HoursListItem>
        <HoursListItem>Saturday | 8:30AM-6PM</HoursListItem>
        <HoursListItem>Sunday | CLOSED</HoursListItem>
      </HoursList>
    </HoursContainer>
  );
};

export default Hours;
