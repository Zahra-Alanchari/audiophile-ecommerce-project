"use client";
import React from "react";
import styled from "styled-components";
import bg from "../../public/assets/home/mobile/image-header.jpg";
import Image from "next/image";
import Link from "next/link";

const Headers = styled.header`
  display: flex;
  width: 100%;
`;

const Intro = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  transform: translatex(-50%);
`;

const Image2 = styled(Image)`
  flex-grow: 1;
  max-width: 600px;
`;
const ButtonProduct = styled.button`
  width: 160px;
  height: 40px;
  background-color: orange;
  border: 0;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  /* border-radius: 3px; */
`;
const TitleNew = styled.h4`
  color: darkgray;
  letter-spacing: 15px;
  font-weight: 10;
  text-align: center;
`;
const TitleProduct = styled.h4`
  /* letter-spacing: 10px; */
  font-size: 2.5rem;
  width: 300px;
  margin-top: 0;
  text-align: center;
  /* font-weight: 10; */
`;
const TitleDescription = styled.p`
  /* letter-spacing: 10px; */
  font-size: 1.1rem;
  width: 300px;
  margin-top: 0;
  color: #b8b4b4;
  line-height: 30px;
  text-align: center;
  /* font-weight: 10; */
`;

const Header = () => {
  return (
    <Headers>
      <Image2 src={bg} width={375} height={500} alt="test"></Image2>
      <Intro>
        <TitleNew>NEW PRODUCT</TitleNew>
        <TitleProduct>XX99 MARK || HEADPHONE</TitleProduct>
        <TitleDescription>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </TitleDescription>
        <Link href={"/headphone/xx99-mark-two-headphones"}>
          <ButtonProduct> SEE PRODUCT</ButtonProduct>
        </Link>
      </Intro>
    </Headers>
  );
};

export default Header;
