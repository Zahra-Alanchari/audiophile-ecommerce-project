import Image from "next/image";
import React from "react";
import styled from "styled-components";
import headphoneCategory from "../../public/assets/category-headphones/mobile/headphone.png";

const HeadphoneProduct = styled.div`
  background-color: #d4cdcd;
  width: 250px;
  margin-top: 100px;
  position: relative;
  padding: 50px;
`;
const ProductImage = styled(Image)`
  position: absolute;
  width: 100px;
  height: 100px;
  top: -40px;
  left: 35%;
  background-color: transparent;
  /* mix-blend-mode: hard-light; */
`;

const Products = () => {
  return (
    <>
      <HeadphoneProduct>
        <ProductImage
          src={headphoneCategory}
          alt="test"
          width={80}
          height={80}
        ></ProductImage>
        <h2>HEADPHONES</h2>
        <p>Shop </p>
      </HeadphoneProduct>
      <HeadphoneProduct>
        <ProductImage
          src={headphoneCategory}
          alt="test"
          width={80}
          height={80}
        ></ProductImage>
        <h2>HEADPHONES</h2>
        <p>Shop </p>
      </HeadphoneProduct>
      <HeadphoneProduct>
        <ProductImage
          src={headphoneCategory}
          alt="test"
          width={80}
          height={80}
        ></ProductImage>
        <h2>HEADPHONES</h2>
        <p>Shop </p>
      </HeadphoneProduct>
    </>
  );
};

export default Products;
