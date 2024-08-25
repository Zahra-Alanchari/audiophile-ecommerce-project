import React from "react";
import earphone from "../../../public/assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import {  useSelector } from "react-redux";
import { RootState } from "@/Type/type";
import Link from "next/link";
import { Detail, ProductItem, SpeakerImg } from "./earphone.style";



const Earphones = () => {
  const data = useSelector((state: RootState) => state.job.job);
  console.log(data[0], "data2");

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
