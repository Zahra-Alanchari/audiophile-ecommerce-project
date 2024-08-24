import Image from "next/image";
import React from "react";
import styled from "styled-components";
import pattern from "../../public/assets/home/desktop/pattern-circles.svg";
import speakerZX9 from "../../public/assets/shared/tablet/image-zx9-speaker.jpg";
import speakerZX7 from "../../public/assets/product-zx7-speaker/mobile/image-gallery-3.jpg"

const SpeakerZX9Img = styled(Image)`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 180px;
  left: 35%;
  background-color: transparent;
  /* mix-blend-mode: hard-light; */
`;
const SpeakerZX7Img = styled(Image)`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 100px;
  left: 35%;
  background-color: transparent;
  /* mix-blend-mode: hard-light; */
`;

const ProductZX9 = styled.div`
  background-color: orange;
  width: 250px;
  height: 500px;
  margin-top: 50px;
  position: relative;
  padding: 50px;
`;
const ProductZX7 = styled.div`
  background-color: orange;
  width: 250px;
  height: 250px;
  margin-top: 100px;
  position: relative;
  padding: 50px;
`;

const Detail = styled.div`
  position: absolute;
  /* width: 100px;
  height: 100px; */
  top: 280px;
  left: 25%;
`;
const DetailZX7 = styled.div`
  position: absolute;
  /* width: 100px;
  height: 100px; */
  top: 180px;
  left: 15%;
`;

const Speakers = () => {
  return (
    <>
      <ProductZX9>
        <SpeakerZX9Img
          src={speakerZX9}
          alt="test"
          width={300}
          height={300}
        ></SpeakerZX9Img>
        <img src={pattern} alt="test2" />
        <Detail>
          <h2>ZX9 SPEAKER</h2>
          <p>uupgrade </p>
          <button> SEE PRODUCT</button>
        </Detail>
      </ProductZX9>
      <ProductZX7>
        <SpeakerZX7Img
          src={speakerZX7}
          alt="test"
          width={300}
          height={300}
        ></SpeakerZX7Img>
        <img src={pattern} alt="test2" />
        <DetailZX7>
          <h2>ZX9 SPEAKER</h2>
          <p>uupgrade </p>
          <button> SEE PRODUCT</button>
        </DetailZX7>
      </ProductZX7>
    </>
  );
};

export default Speakers;
