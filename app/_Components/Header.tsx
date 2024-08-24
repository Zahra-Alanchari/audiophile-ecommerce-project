"use client"
import React from "react";
import styled from "styled-components";
import bg from "../../public/assets/home/mobile/image-header.jpg";
import Image from "next/image";

const Headers = styled.header`
  display: flex;
  width: 100%;
`;

const Intro = styled.div`
  position: absolute;
  top: 150px;
  left: 15px;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
`;

const Image2 = styled(Image)`
  flex-grow: 1;
  max-width: 600px;
`;

const Header = () => {
  return (
    <Headers>
      <Image2 src={bg} width={375} height={500} alt="test"></Image2>
      <Intro>
        <p>NEW PRODUCT</p>
        <p>XX99 MARK || HEADPHONE</p>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button> SEE PRODUCT</button>
      </Intro>
    </Headers>
  );
};

export default Header;
