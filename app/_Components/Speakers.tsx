import Image from "next/image";
import React from "react";
import styled from "styled-components";
import pattern from "../../public/assets/home/desktop/pattern-circles.svg";
import speakerZX9 from "../../public/assets/home/mobile/image-speaker-zx9.png";
import speakerZX7 from "../../public/assets/home/mobile/image-speaker-zx7.png";
import Link from "next/link";

const SpeakerZX9Img = styled(Image)`
  position: absolute;
  width: 200px;
  height: 210px;
  top: 100px;
  left: 50%;
  transform: translatex(-50%);
  background-color: transparent;
`;
const SpeakerZX7Img = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
`;

const ProductZX9 = styled.div`
  background-color: #cc7101;
  border-radius: 10px;
  width: 250px;
  height: 500px;
  margin-top: 50px;
  position: relative;
  padding: 50px;
  overflow: hidden;
`;
const ProductZX7 = styled.div`
  background-color: #dfdfdf;
  border-radius: 10px;
  width: 250px;
  height: 200px;
  margin-top: 100px;
  position: relative;
  padding: 50px;
`;

const Detail = styled.div`
  position: absolute;
  top: 330px;
  left: 50%;
  transform: translatex(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    width: 100px;
    color: white;
    text-align: center;
  }
  & p {
    color: #f8cf83;
    width: 250px;
    text-align: center;
    line-height: 20px;
  }
  & button {
    width: 150px;
    background-color: black;
    color: white;
    height: 50px;
    border: 0;
    cursor: pointer;
  }
`;
const DetailZX7 = styled.div`
  position: absolute;
  top: 100px;
  left: 15%;
  & button {
    width: 150px;
    border: 1px solid black;
    color: black;
    height: 50px;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
  }
`;
const PatternLogo = styled(Image)`
  position: absolute;
  left: -125px;
  top: -120px;
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
          width={300}
          height={300}
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
