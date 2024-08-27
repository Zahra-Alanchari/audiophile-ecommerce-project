import Image from "next/image";
import styled from "styled-components";

export const SpeakerImg = styled(Image)`
  position: absolute;
  left: 0%;
  background-color: transparent;
  border-radius: 10px;
  @media screen and (min-width: 760px) {
    left: -53%;
  }
  @media screen and (min-width: 1440px) {
    left: -25px;
    width: 550px;
    height: 250px;
  }
`;

export const ProductItem = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  padding: 50px;
`;

export const Detail = styled.div`
  background-color: lightgrey;
  position: absolute;
  width: 350px;
  height: 200px;
  top: 280px;
  left: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 760px) {
    top: 51px;
    left: 176px;
  }
  @media screen and (min-width: 1440px) {
    top: 51px;
    left: 535px;
    width: 550px;
    height: 250px;
  }
  & button {
    width: 150px;
    border: 1px solid black;
    color: black;
    height: 50px;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      /* background-color: #cc7101; */
      transform: translateY(0.2rem);
    }
  }
`;
