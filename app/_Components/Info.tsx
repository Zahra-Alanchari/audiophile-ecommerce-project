import Image from "next/image";
import React from "react";
import pics from "../../public/assets/shared/mobile/image-best-gear.jpg";
import styled from "styled-components";

const InfoImg = styled(Image)`
  background-color: transparent;
  border-radius: 10px;
`;
const Infos = styled.div`
  width: 350px;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  position: relative;
  padding: 50px;
  justify-content: center;
  text-align: center;
  line-height: 30px;
  & p{
    color: grey;
  }
`;

const Info = () => {
  return (
    <>
      <Infos>
          <InfoImg src={pics} alt="test" width={350} height={250}></InfoImg>
          <h1>
            BRINGING YOU THE <span style={{ color: "orange" }}>BEST</span> AUDIO
            GEAR
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
      </Infos>
    </>
  );
};

export default Info;
