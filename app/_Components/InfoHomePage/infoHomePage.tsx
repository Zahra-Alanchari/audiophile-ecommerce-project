import React from "react";
import pics from "../../../public/assets/shared/mobile/image-best-gear.jpg";
import { InfoImg, Infos } from "./infoHomePage.style";

const InfoHomePage = () => {
  return (
    <>
      <Infos>
        <InfoImg src={pics} alt="test" height={250}></InfoImg>
        <div>
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
        </div>
      </Infos>
    </>
  );
};

export default InfoHomePage;
