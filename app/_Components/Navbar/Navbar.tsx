"use client";
import React, { useState } from "react";
import burgur from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import basket from "../../../public/assets/shared/desktop/icon-cart.svg";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  BasketCount,
  BasketIcon,
  BurgurIcon,
  Dialog,
  Nav,
} from "./navbar.style";
import { RootState } from "@/type";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const data = useSelector((state: RootState) => state.product.shoppingItem);
  const totalCount = data.reduce(
    (acc, product) => acc + (product?.count ? product.count : 0),
    0
  );
  return (
    <Nav>
      {showModal && (
        <Dialog open>
          <ul onClick={() => setShowModal(false)}>
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
        </Dialog>
      )}
      <BurgurIcon
        src={burgur}
        width={30}
        height={30}
        alt="test"
        onClick={() => setShowModal(!showModal)}
      ></BurgurIcon>
      <h1>audiophile</h1>
      <Link href={"/checkOut"}>
        <BasketIcon src={basket} width={30} height={30} alt="test"></BasketIcon>
        {data.length > 0 && <BasketCount>{totalCount}</BasketCount>}
      </Link>
    </Nav>
  );
};

export default Navbar;
