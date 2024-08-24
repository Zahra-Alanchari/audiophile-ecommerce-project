import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Footers = styled.footer`
  background-color: black;
  margin-top: 400px;
  width: 100%;
  display: flex;
  /* flex: 1 0 0 ; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  /* list-style-type:none; */
`;

const Footer = () => {
  return (
    <Footers>
      <h1>audiophile</h1>
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
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p>logos</p>
    </Footers>
  );
};

export default Footer;
