import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Footers = styled.footer`
  background-color: black;
  margin-top: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 40px 5px;

  & p{
    color: grey;
    width: 380px;
    line-height: 25px;
    text-align: center;
  }
`;

const List = styled(Link)`
  text-decoration: none;
  color: white;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;

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
      <Logo/>
    </Footers>
  );
};

export default Footer;
