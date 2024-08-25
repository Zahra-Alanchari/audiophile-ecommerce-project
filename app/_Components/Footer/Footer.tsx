import React from "react";
import Logo from "../Logo/Logo";
import { Footers, List, NavList } from "./footer.style";

const Footer = () => {
  return (
    <Footers>
      <h1>audiophile</h1>
      <NavList>
        <li>
          <List href={"/"}>Home</List>
        </li>
        <li>
          <List href={"/speaker"}>Speakers</List>
        </li>
        <li>
          <List href={"/headphone"}>Headphones</List>
        </li>
        <li>
          <List href={"/earphones"}>earphones</List>
        </li>
      </NavList>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <Logo />
    </Footers>
  );
};

export default Footer;
