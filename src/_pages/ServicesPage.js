import Hp from "../_assets/hp.jpg";
import Image1 from "../_assets/pexels-dmitry-zvolskiy-1570807.jpg";
import Image2 from "../_assets/pexels-nick-demou-1319461.jpg";
import ImgFrame from "../_components/ImgFrame";
import PageTitle from "../_components/PageTitle";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100;
  justify-content: space-evenly;
`;

const ServicesPageContainer = styled.div`
  position: relative;
  z-index: 1;
  // padding: 3.2rem;
`;

const ServicesTopImg = styled.div`
  // max-width: 30vw;
  // height: auto;
  display: flex;
  flex-direction: column;
`;

const ImageTitle = styled.h2`
  font-size: 3.2rem;
`;

const ServicesPage = () => {
  return (
    <ServicesPageContainer>
      <PageTitle titleText="What We Do" />
      <Wrapper>
        <ServicesTopImg>
          <ImageTitle>Clean Cuts</ImageTitle>
          <ImgFrame imgClass="img" imgSrc={Image1} imgAlt="Fucking Image" />
        </ServicesTopImg>
        <ServicesTopImg>
          <ImageTitle>Close Shaves</ImageTitle>
          <ImgFrame imgClass="img" imgSrc={Image2} imgAlt="Fucking Image" />
        </ServicesTopImg>
        <ServicesTopImg>
          <ImageTitle>Professional Hair Pieces</ImageTitle>
          <ImgFrame imgClass="img" imgSrc={Hp} imgAlt="Fucking Image" />
        </ServicesTopImg>
      </Wrapper>
    </ServicesPageContainer>
  );
};

export default ServicesPage;
