import Corner from "../_assets/corner-dec.png";
import Vertical from "../_assets/vertical-dec.png";
import styled from "styled-components";

const OutterBorder = styled.div`
  border: 2px solid black;
  height: 99%;
  width: 98%;
  // width: fit-content;
  // height: fit-content;
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
  align-items: center;
  flex-direction: column;
  position: relative;
  border: 2px solid black;
  height: 100%;
  width: 100%;
  padding-bottom: -200px;
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

const ImgFrame = (props) => {
  return (
    <OutterBorder>
      <MidBorder>
        <InnerBorder>
          <CornerDecorationLeftTop src={Corner} />
          <CornerDecorationRightTop src={Corner} />
          <CornerDecorationRightBottom src={Corner} />
          <CornerDecorationLeftBottom src={Corner} />
          <VerticalDecorationTop src={Vertical} />
          <VerticalDecorationBottom src={Vertical} />
          <img
            className={props.imgClass}
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </InnerBorder>
      </MidBorder>
    </OutterBorder>
  );
};

export default ImgFrame;
