import React from "react";
import earphone from "../../../public/assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import Link from "next/link";
import { Detail, ProductItem, SpeakerImg } from "./earphone.style";

const Earphones = () => {
  return (
    <>
      <ProductItem>
        <SpeakerImg
          src={earphone}
          alt="test"
          width={350}
          height={200}
        ></SpeakerImg>
        <Detail>
          <h2> YX1 EARPHONES</h2>
          <Link href={"/earphones/yx1-earphones"}>
            <button> SEE PRODUCT</button>
          </Link>
        </Detail>
      </ProductItem>
    </>
  );
};

export default Earphones;
