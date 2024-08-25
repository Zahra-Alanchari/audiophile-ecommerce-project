import Image from "next/image";
import styled from "styled-components";
import React from "react";
import pattern from "../../../public/assets/home/desktop/pattern-circles.svg";
import speakerZX9 from "../../../public/assets/home/mobile/image-speaker-zx9.png";
import speakerZX7 from "../../../public/assets/home/tablet/image-speaker-zx7-removebg-preview.png";
import Link from "next/link";
import {
  Detail,
  DetailZX7,
  PatternLogo,
  ProductZX7,
  ProductZX9,
  SpeakerZX7Img,
  SpeakerZX9Img,
} from "./speaker.style";

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
        <PatternLogo
          src={pattern}
          width={600}
          height={650}
          alt="test2"
        ></PatternLogo>
        <Detail>
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href={"/speaker/zx9-speaker"}>
            <button> SEE PRODUCT</button>
          </Link>
        </Detail>
      </ProductZX9>
      <ProductZX7>
        <SpeakerZX7Img
          src={speakerZX7}
          alt="test"
          width={450}
          height={250}
        ></SpeakerZX7Img>
        <DetailZX7>
          <h2>ZX7 SPEAKER</h2>
          <Link href={"/speaker/zx7-speaker"}>
            <button> SEE PRODUCT</button>
          </Link>
        </DetailZX7>
      </ProductZX7>
    </>
  );
};

export default Speakers;
