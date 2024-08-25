import Image from "next/image";
import styled from "styled-components";

export const SpeakerZX9Img = styled(Image)`
  position: absolute;
  width: 200px;
  height: 210px;
  top: 100px;
  left: 50%;
  transform: translatex(-50%);
  background-color: transparent;
  @media screen and (min-width: 1440px) {
    top: 100px;
    left: 30%;
    width: 300px;
    height: 410px;
  }
`;
export const SpeakerZX7Img = styled(Image)`
  position: absolute;
  right: -115px;
  background-color: transparent;
  @media screen and (min-width: 760px) {
    right: 0px;
    top: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 900px;
    height: 400px;
    top: -150px;
  }
`;

export const ProductZX9 = styled.div`
  background-color: #cc7101;
  border-radius: 10px;
  width: 250px;
  height: 500px;
  margin-top: 50px;
  position: relative;
  padding: 50px;
  overflow: hidden;
  @media screen and (min-width: 760px) {
    width: 615px;
  }
  @media screen and (min-width: 1440px) {
    width: 1020px;
    height: 400px;
  }
`;
export const ProductZX7 = styled.div`
  background-color: #dfdfdf;
  border-radius: 10px;
  width: 250px;
  height: 200px;
  margin-top: 100px;
  position: relative;
  padding: 50px;
  overflow: hidden;
  @media screen and (min-width: 760px) {
    width: 620px;
    margin-top: 50px;
    height: 150px;
  }
  @media screen and (min-width: 1440px) {
    width: 1020px;
  }
`;

export const Detail = styled.div`
  position: absolute;
  top: 330px;
  left: 50%;
  transform: translatex(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    width: 100px;
    color: white;
    text-align: center;
  }
  & p {
    color: #f8cf83;
    width: 250px;
    text-align: center;
    line-height: 20px;
  }
  & button {
    width: 150px;
    background-color: black;
    color: white;
    height: 50px;
    border: 0;
    cursor: pointer;
  }
  @media screen and (min-width: 1440px) {
    top: 100px;
    left: 70%;
    align-items: flex-start;
    font-size: 1.5rem;
    width: 200px;
    & p {
      text-align: start;
    }
  }
`;
export const DetailZX7 = styled.div`
  position: absolute;
  top: 100px;
  left: 15%;
  & button {
    width: 150px;
    border: 1px solid black;
    color: black;
    height: 50px;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
  }
  @media screen and (min-width: 1440px) {
    top: 50px;
  }
`;
export const PatternLogo = styled(Image)`
  position: absolute;
  left: -125px;
  top: -120px;
  @media screen and (min-width: 760px) {
    left: 60px;
    top: -115px;
  }
  @media screen and (min-width: 1440px) {
    left: 30px;
    top: 120px;
  }
`;