import styled from "styled-components";
import PoleLeft from "../_assets/barber_pole.png";
import PoleRight from "../_assets/barber_pole2.png";

const Wrapper = styled.div`
  display: flex;
  padding: 0 3.2rem;
  width: 100%;
  justify-content: center;
`;

const PageTitleAll = styled.h1`
font-size: 4.8rem;
  // text-align: center;
  align-items: center;
  width: 75%;
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
    font-family: 'Sancreek', cursive;
    // border-top: 2px solid blue;

}
  &::before,
  &::after {
    content: "";
    flex: 1;
    background: white;
    // border: solid white;
    border-width: 0.05em 0;
    height: 0.2rem;
    margin: 0.8rem;
  }

`;
const PageTitle = (props) => {
  return (
    <Wrapper>
      <img
        src={PoleLeft}
        alt=""
        className="razor"
        width="40px"
        height="auto"
        title="Straight Razor"
      />
      <PageTitleAll>{props.titleText}</PageTitleAll>
      <img
        src={PoleRight}
        alt=""
        className="razor"
        width="40px"
        height="auto"
        title="Straight Razor"
      />
    </Wrapper>
  );
};

export default PageTitle;
