import ContactInfo from "./ContactInfo";
import Corner from "../_assets/corner-dec.png";
import Hours from "./Hours";
import Map from "./Map";
import PageTitle from "./PageTitle";
import Vertical from "../_assets/vertical-dec.png";
import styled from "styled-components";

const Wrapper = styled.div`
  // display: flex;
  // justify-content: space-evenly;
  width: fit-content;
  // background: green;
  margin: 0 auto;
  margin-top: 3.2rem;
  padding: 1.6rem;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const ContactMainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const OutterBorder = styled.div`
  border: 2px solid black;
  height: 99%;
  width: 98%;
  padding: 6px;
  margin: 0 auto;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
`;

const MidBorder = styled.div`
  border: 6px solid black;
  height: 100%;
  width: 100%;
  padding: 6px;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  margin: auto;
`;

const InnerBorder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border: 2px solid black;
  height: 100%;
  width: 100%;
  // padding: 6px;
  margin: auto;
  // z-index: 2;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
`;

const CornerDecorationLeftTop = styled.img`
  position: absolute;
  width: 3em;
  margin: -3px;
  left: 0;
  top: 0;
`;
const CornerDecorationRightTop = styled.img`
  position: absolute;
  width: 3em;
  margin: -3px;
  top: 0;
  right: 0;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
const CornerDecorationRightBottom = styled.img`
  position: absolute;
  width: 3em;
  margin: -3px;
  right: 0;
  bottom: 0;
  -webkit-transform: scale(-1);
  transform: scale(-1);
`;

const CornerDecorationLeftBottom = styled.img`
  position: absolute;
  width: 3em;
  margin: -3px;
  left: 0;
  bottom: 0;
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
`;

const VerticalDecorationTop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 11em;
  top: 0;
`;

const VerticalDecorationBottom = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 11em;
  bottom: 0;
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
`;

const MapTitle = styled.h2`
  text-align: center;
`;
const ContactMainContent = () => {
  return (
    <ContactMainContainer>
      <PageTitle titleText="We Would Love To Hear From You!" />
      <Wrapper>
        <MapTitle>Stop in today!</MapTitle>
        <OutterBorder>
          <MidBorder>
            <InnerBorder>
              <CornerDecorationLeftTop src={Corner} />
              <CornerDecorationRightTop src={Corner} />
              <CornerDecorationRightBottom src={Corner} />
              <CornerDecorationLeftBottom src={Corner} />
              <VerticalDecorationTop src={Vertical} />
              <VerticalDecorationBottom src={Vertical} />
              <Map />
            </InnerBorder>
          </MidBorder>
        </OutterBorder>
      </Wrapper>
      <Wrapper2>
        <Hours />
        <ContactInfo />
      </Wrapper2>
    </ContactMainContainer>
  );
};

export default ContactMainContent;
