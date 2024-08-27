import Link from "next/link";
import styled from "styled-components";

export const EarphoneItems = styled.div`
  width: 350px;
  margin: 0 auto;
  @media screen and (min-width: 760px) {
    margin: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin: 60px auto;
    width: 1200px;
  }
`;
export const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  line-height: 30px;
`;
export const AddToCartBtn = styled.button`
  width: 150px;
  height: 40px;
  border: 0;
  background-color: #cc7101;
  color: white;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #cc7101;
    transform: scale(1.1);
  }
  &:active {
    background-color: #cc7101;
    transform: translateY(0.2rem);
  }
  @media screen and (min-width: 1440px) {
    width: 250px;
    height: 60px;
  }
`;
export const ProductCount = styled.div`
  border: 0;
  background-color: #dbdada;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  & button {
    border: 0;
    background-color: transparent;
    margin-left: 10px;
    cursor: pointer;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

export const CartCounter = styled.div`
  display: flex;
`;
export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  text-align: start;
  @media screen and (min-width: 760px) {
    width: 700px;
  }
  @media screen and (min-width: 1440px) {
    width: 550px;
    font-size: 1.1rem;
    margin-top: 100px;
  }
`;

export const InTHeBox = styled.div`
  & ul {
    list-style-type: none;
    text-align: start;
  }
  & span {
    color: #cc7101;
    margin-right: 10px;
  }
  @media screen and (min-width: 760px) {
    display: flex;
    width: 600px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    position: relative;
    top: -375px;
    left: 700px;
    width: 450px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  position: relative;
  left: -20px;
  cursor: pointer;
  & img:hover {
    transition: all 0.2s;
    z-index: 10;
    transform: scale(1.4);
    @media screen and (min-width: 1440px) {
      transform: scale(1.2);
  }
  }
  @media screen and (min-width: 760px) {
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 200px;
  }
`;
export const FirstBoxImg = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (min-width: 760px) {
    width: 350px;
    height: 300px;
    margin-right: -20px;
    margin-left: 20px;
  }
  @media screen and (min-width: 1440px) {
    width: 650px;
    height: 450px;
  }
  & img {
    margin-bottom: 10px;
    width: 150px;
    height: 200px;
    @media screen and (min-width: 760px) {
      width: 350px;
      height: 200px;
    }
    @media screen and (min-width: 1440px) {
      width: 600px;
      height: 285px;
    }
  }
`;
export const SecondBoxImg = styled.div`
  width: 150px;
  height: 230px;
  @media screen and (min-width: 760px) {
    margin-left: -40px;
  }
  @media screen and (min-width: 1440px) {
    width: 550px;
    height: 450px;
  }
  & img {
    width: 150px;
    height: 190px;
    margin-left: 10px;
    @media screen and (min-width: 760px) {
      width: 350px;
      height: 380px;
      position: relative;
      left: 60px;
    }
    @media screen and (min-width: 1440px) {
      width: 600px;
      height: 580px;
    }
  }
`;

export const SeeProductBtn = styled.button`
  width: 130px;
  height: 35px;
  border: 0;
  background-color: #cc7101;
  margin-bottom: 20px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #cc7101;
    transform: scale(1.1);
  }
  &:active {
    background-color: #cc7101;
    transform: translateY(0.2rem);
  }
`;
export const BackLink = styled.button`
  text-decoration: none;
  color: grey;
  border: 0;
  background-color: transparent;
  padding: 20px;
  cursor: pointer;
`;
export const NewProduct = styled.h3`
  color: #cc7101;
  font-weight: 10;
  letter-spacing: 15px;
  @media screen and (min-width: 760px) {
    letter-spacing: 10px;
  }
`;
export const ProductWrapper = styled.div`
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  width: 300px;
  @media screen and (min-width: 760px) {
    display: flex;
    left: 50%;
    position: relative;
    transform: translateX(-120%);
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
    transform: translateX(-50%);
  }
`;
export const ProductProfileWrapper = styled.div`
  @media screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }
  & img {
    @media screen and (min-width: 1440px) {
      width: 550px;
      height: 550px;
      position: relative;
      left: -15px;
      top: 30px;
    }
  }
`;
export const ProductCartWrapper = styled.div`
  @media screen and (min-width: 760px) {
    margin-left: 35px;
    width: 350px;
    & p {
      width: 330px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-left: 35px;
    width: 562px;
    font-size: 1.5rem;
    & p {
      width: 450px;
    }
  }
`;
export const RecommendProduct = styled.div`
  position: relative;
  left: 25px;
  & img {
    width: 300px;
    height: 140px;
    @media screen and (min-width: 760px) {
      width: 220px;
      margin-right: 15px;
      height: 120px;
    }
    @media screen and (min-width: 1440px) {
      width: 360px;
      margin-right: 15px;
      height: 200px;
    }
  }
  @media screen and (min-width: 760px) {
    display: flex;
    margin-bottom: 50px;
    width: 300px;
    height: 140px;
    left: 10px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 150px;
  }
`;
