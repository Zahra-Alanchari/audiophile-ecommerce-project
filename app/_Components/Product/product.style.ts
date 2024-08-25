import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeadphoneProduct = styled.div`
  background-color: #dfdfdf;
  border-radius: 10px;
  width: 250px;
  margin-top: 100px;
  position: relative;
  padding: 30px;
  @media screen and (min-width:767px) {
    width: 130px;
    margin-right: 15px;
    padding: 50px;
  }
  @media screen and (min-width:1440px) {
    width: 260px;
    margin-right: 15px;
  }
  & h2{
    display: flex;
    justify-content: center;
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
  color: inherit;
  text-decoration: none;
`;
export const ProductImage = styled(Image)`
  position: absolute;
  /* width: 100px;
  height: 100px; */
  top: -40px;
  left: 37%;
  background-color: transparent;
  color: #c28411;
  /* margin: 0; */
  /* mix-blend-mode: hard-light; */
`;