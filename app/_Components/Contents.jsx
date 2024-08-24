import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Speakers from "./Speakers";
import Products from "./Products";
import Earphones from "./Earphones";
import Info from "./Info"

const Content = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Contents = () => {
  return (
    <Content>
      <Products />
      <Speakers />
      <Earphones />
      <Info/>
    </Content>
  );
};

export default Contents;
