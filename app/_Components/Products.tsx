import Image from "next/image";
import React from "react";
import styled from "styled-components";
import headphoneCategory from "../../public/assets/category-headphones/mobile/headphone.png";
import speakerCategory from "../../public/assets/home/mobile/image-speaker-zx9.png";
import earphoneCategory from "../../public/assets/category-earphones/mobile/image-yx1-earphones.png";
import Link from "next/link";

const HeadphoneProduct = styled.div`
  background-color: #dfdfdf;
  border-radius: 10px;
  width: 250px;
  margin-top: 100px;
  position: relative;
  padding: 50px;
  & h2{
    display: flex;
    justify-content: center;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
  color: inherit;
  text-decoration: none;
`;
const ProductImage = styled(Image)`
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

const Products = () => {
  return (
    <>
      <HeadphoneProduct>
        <ProductImage
          src={headphoneCategory}
          alt="test"
          width={100}
          height={100}
        ></ProductImage>
        <h2>HEADPHONES</h2>
        <StyledLink href={"/headphone"}>
          SHOP <span style={{ color: "#c28411", marginLeft: "10px" }}> &gt;</span>
        </StyledLink>
      </HeadphoneProduct>
      <HeadphoneProduct>
        <ProductImage
          src={speakerCategory}
          alt="test"
          width={70}
          height={70}
        ></ProductImage>
        <h2>SPEAKERS</h2>
        <StyledLink href={"/speaker"}>
          SHOP <span style={{ color: "#c28411",marginLeft: "10px" }}>&gt;</span>{" "}
        </StyledLink>
      </HeadphoneProduct>
      <HeadphoneProduct>
        <ProductImage
          src={earphoneCategory}
          alt="test"
          width={90}
          height={90}
        ></ProductImage>
        <h2>EARPHONES</h2>
        <StyledLink href={"/earphones"}>
          SHOP
          <span style={{ color: "#c28411",marginLeft: "10px" }}> &gt; </span>{" "}
        </StyledLink>
      </HeadphoneProduct>
    </>
  );
};

export default Products;
