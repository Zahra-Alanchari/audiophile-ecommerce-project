"use client";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import burgur from "../../public/assets/shared/tablet/icon-hamburger.svg";
import basket from "../../public/assets/shared/desktop/icon-cart.svg";
import Link from "next/link";

const Nav = styled.nav`
  background-color: black;
  width: 100%;
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const BurgurIcon = styled(Image)`
  margin-left: 20px;
  cursor: pointer;
`;
const BasketIcon = styled(Image)`
  margin-right: 20px;
  cursor: pointer;
`;
const Dialog = styled.dialog`
  top: 66px;
  color: white;
  width: 100%;
  height: 200%;
  position: fixed;
  display: flex;
  z-index: 1;
  background-color: #534e4e99;
  padding-top: 159px;
  /* margin: 0 auto; */
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
`;
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Nav>
      {showModal && (
        <Dialog open>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/speaker"}>Speakers</Link>
            </li>
            <li>
              <Link href={"/headphone"}>Headphones</Link>
            </li>
            <li>
              <Link href={"/earphones"}>earphones</Link>
            </li>
          </ul>
          <button onClick={() => setShowModal(false)}>close</button>
        </Dialog>
      )}
      <BurgurIcon
        src={burgur}
        width={30}
        height={30}
        alt="test"
        onClick={() => setShowModal(true)}
      ></BurgurIcon>
      <h1>audiophile</h1>
      <Link href={"/checkOut"}>
        <BasketIcon src={basket} width={30} height={30} alt="test"></BasketIcon>
      </Link>
    </Nav>
  );
};

export default Navbar;
