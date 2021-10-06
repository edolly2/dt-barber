import styled from "styled-components";
// import ImgFrame from "./ImgFrame";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MapIframe = styled.div`
  //   width: 100%;
  //   height: 100%;
`;

const MapTitle = styled.h2``;

const Map = () => {
  return (
    <MapContainer>
      {/* <ImgFrame> */}
      <MapTitle>Stop in today!</MapTitle>
      <MapIframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.886183628054!2d-96.10180398507732!3d41.246037079277386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8793f2e4c6c6a1a5%3A0xd3adf7e18cedf58e!2sHairitage%20Styling!5e0!3m2!1sen!2sus!4v1633487120311!5m2!1sen!2sus"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </MapIframe>
      {/* </ImgFrame> */}
    </MapContainer>
  );
};

export default Map;
