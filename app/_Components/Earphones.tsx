import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import earphone from "../../public/assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "@/redux/action";
import { RootState } from "@/Type/type";
import Link from "next/link";

const SpeakerImg = styled(Image)`
  position: absolute;
  left: 0%;
  background-color: transparent;
  border-radius: 10px;
`;

const ProductItem = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  padding: 50px;
`;

const Detail = styled.div`
  background-color: lightgrey;
  position: absolute;
  width: 350px;
  height: 200px;
  top: 280px;
  left: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & button {
    width: 150px;
    border: 1px solid black;
    color: black;
    height: 50px;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
  }
`;

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
