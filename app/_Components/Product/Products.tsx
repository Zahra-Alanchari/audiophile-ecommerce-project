import React from "react";
import headphoneCategory from "../../../public/assets/category-headphones/mobile/headphone.png";
import speakerCategory from "../../../public/assets/home/mobile/image-speaker-zx9.png";
import earphoneCategory from "../../../public/assets/category-earphones/mobile/image-yx1-earphones.png";
import { HeadphoneProduct, ProductImage, StyledLink } from "./product.style";



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
