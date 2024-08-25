import Image from "next/image";
import styled from "styled-components";

export const InfoImg = styled(Image)`
  background-color: transparent;
  border-radius: 10px;
  width: 330px;
  margin: 0;
  @media screen and (min-width: 760px) {
    width: 850px;
    height: 350px;
  }
  @media screen and (min-width: 1440px) {
    width: 550px;
    height: 650px;
    position: relative;
  }
`;
export const Infos = styled.div`
  width: 330px;
  top: 250px;
  left: 2px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  text-align: center;
  line-height: 30px;
  @media screen and (min-width: 760px) {
    width: 700px;
    margin-top: -210px;
    left: 3px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    left: -11%;
    flex-wrap: nowrap;
    align-items: center;
    text-align: start;
  }
  & p {
    color: grey;
    @media screen and (min-width: 760px) {
      width: 500px;
    }
  }
  & h1 {
    @media screen and (min-width: 760px) {
      width: 500px;
    }
    @media screen and (min-width: 1440px) {
      width: 550px;
    }
  }
`;