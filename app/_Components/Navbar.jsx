"use client"
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import burgur from "../../public/assets/shared/tablet/icon-hamburger.svg";
import basket from "../../public/assets/shared/desktop/icon-cart.svg";


const Nav = styled.nav`
  background-color: red;
  width: 100%;
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;
`;
const Navbar = () => {
  return (
    <Nav>
      <Image src={burgur} width={10} height={10} alt="test" />
      <p>audiophile</p>
      <Image src={basket} width={10} height={10} alt="test" />
    </Nav>
  );
};

export default Navbar;
