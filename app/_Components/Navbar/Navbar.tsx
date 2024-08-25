"use client";
import React, { useState } from "react";
import burgur from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import basket from "../../../public/assets/shared/desktop/icon-cart.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Type/type";
import { AppDispatch } from "@/redux/store";
import { BasketCount, BasketIcon, BurgurIcon, Dialog, Nav } from "./navbar.style";


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const data = useSelector((state: RootState) => state.job.cart);
  const dispatch = useDispatch<AppDispatch>();
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
        onClick={() => setShowModal(!showModal)}
      ></BurgurIcon>
      <h1>audiophile</h1>
      <Link href={"/checkOut"}>
        <BasketIcon src={basket} width={30} height={30} alt="test"></BasketIcon>
        {data > 0 && <BasketCount>{data}</BasketCount>}
      </Link>
    </Nav>
  );
};

export default Navbar;
