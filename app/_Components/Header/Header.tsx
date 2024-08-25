"use client";
import React from "react";
import bg from "../../../public/assets/home/tablet/image-header.jpg";
import Link from "next/link";
import {
  ButtonProduct,
  HeaderImg,
  Headers,
  Intro,
  TitleDescription,
  TitleNew,
  TitleProduct,
} from "./header.style";

const Header = () => {
  return (
    <Headers>
      <HeaderImg src={bg} width={400} height={500} alt="test"></HeaderImg>
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
