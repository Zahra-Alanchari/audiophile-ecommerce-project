import Image from "next/image";
import React from "react";
import styled from "styled-components";
import headphoneCategory from "../../public/assets/category-headphones/mobile/headphone.png";
import speakerCategory from "../../public/assets/home/mobile/image-speaker-zx9.png";
import earphoneCategory from "../../public/assets/category-earphones/mobile/image-yx1-earphones.png";

const HeadphoneProduct = styled.div`
  background-color: #d4cdcd;
  width: 250px;
  margin-top: 100px;
  position: relative;
  padding: 50px;
`;
const ProductImage = styled(Image)`
  position: absolute;
  /* width: 100px;
  height: 100px; */
  top: -40px;
  left: 37%;
  background-color: transparent;
  color: #c28411;
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
        <p>Shop <span style={{ color: "#c28411" }}>&gt;</span></p>
      </HeadphoneProduct>
      <HeadphoneProduct>
        <ProductImage
          src={speakerCategory}
          alt="test"
          width={70}
          height={70}
        ></ProductImage>
        <h2>HEADPHONES</h2>
        <p>Shop <span style={{ color: "#c28411" }}>&gt;</span> </p>
      </HeadphoneProduct>
      <HeadphoneProduct>
        <ProductImage
          src={earphoneCategory}
          alt="test"
          width={90}
          height={90}
        ></ProductImage>
        <h2>HEADPHONES</h2>
        <p>Shop <span style={{ color: "#c28411" }}>&gt;</span> </p>
      </HeadphoneProduct>
    </>
  );
};

export default Products;
