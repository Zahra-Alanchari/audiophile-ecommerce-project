import React from "react";
import facebook from "../../../public/assets/shared/desktop/icon-facebook.svg";
import twitter from "../../../public/assets/shared/desktop/icon-twitter.svg";
import insta from "../../../public/assets/shared/desktop/icon-instagram.svg";
import Image from "next/image";
import { LogoItem } from "./logo.style";



const Logo = () => {
  return (
    <LogoItem>
      <Image src={facebook} width={25} height={25} alt="test" />
      <Image src={twitter} width={25} height={25} alt="test" />
      <Image src={insta} width={25} height={25} alt="test" />
    </LogoItem>
  );
};

export default Logo;
