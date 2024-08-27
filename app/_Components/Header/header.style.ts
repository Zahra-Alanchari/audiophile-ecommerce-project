import Image from "next/image";
import styled from "styled-components";

export const Headers = styled.header`
  display: flex;
  width: 100%;
`;

export const Intro = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%,25%);
`;

export const HeaderImg = styled(Image)`
  flex-grow: 1;
  width: 359px;
  @media screen and (min-width: 375px) {
    width: 100%;
  }
`;
export const ButtonProduct = styled.button`
  width: 160px;
  height: 40px;
  background-color: orange;
  border: 0;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover{
    background-color: #cc7101;
    transform: scale(1.1);
  }
  &:active{
    transition: all 0.2s;
    background-color: #cc7101;
    transform: translateY(.2rem);
  }
`;
export const TitleNew = styled.h4`
  color: darkgray;
  letter-spacing: 15px;
  font-weight: 10;
  text-align: center;
`;
export const TitleProduct = styled.h4`
  font-size: 2.5rem;
  width: 300px;
  margin-top: 0;
  text-align: center;
`;
export const TitleDescription = styled.p`
  font-size: 1.1rem;
  width: 300px;
  margin-top: 0;
  color: #b8b4b4;
  line-height: 30px;
  text-align: center;
  
`;