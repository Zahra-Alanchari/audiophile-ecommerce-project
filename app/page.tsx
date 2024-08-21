// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import Image from "next/image";
import bg from "../public/assets/home/mobile/image-header.jpg";
import burgur from "../public/assets/shared/tablet/icon-hamburger.svg";
import styled from "styled-components";
import basket from "../public/assets/shared/desktop/icon-cart.svg";
import headphoneCategory from "../public/assets/category-headphones/mobile/image-xx99-mark-one.jpg";

const Navbar = styled.nav`
  background-color: red;
  width: 100%;
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
`;

const Intro = styled.div`
  position: absolute;
  top: 150px;
  left: 15px;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
`;

const Image2 = styled(Image)`
  flex-grow: 1;
`;
const Content = styled.main`
  background-color: blue;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeadphoneProduct = styled.div`
  background-color: white;
  width: 250px;
  margin-top: 100px;
  position: relative;
  padding: 50px;
`;
const ProductImage = styled(Image)`
  position: absolute;
  top: -40px;
  left: 35%;
`;
export default function Home() {
  return (
    <div>
      <Navbar>
        <Image src={burgur} width={10} height={10} alt="test" />
        <p>audiophile</p>
        <Image src={basket} width={10} height={10} alt="test" />
      </Navbar>
      <Header>
        <Image2 src={bg} width={375} height={500} alt="test"></Image2>
        <Intro>
          <p>NEW PRODUCT</p>
          <p>XX99 MARK || HEADPHONE</p>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button> SEE PRODUCT</button>
        </Intro>
      </Header>
      <Content>
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
      </Content>
    </div>
  );
}
