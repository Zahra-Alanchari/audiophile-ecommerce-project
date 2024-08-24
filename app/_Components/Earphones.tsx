import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import earphone from "../../public/assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "@/redux/action";
import { RootState } from "@/Type/type";

const SpeakerImg = styled(Image)`
  position: absolute;
  /* width: 100px;
  height: 100px; */
  /* top: 180px; */
  left: 0%;
  background-color: transparent;
  border-radius: 10px;
  /* mix-blend-mode: hard-light; */
`;

const ProductItem = styled.div`
  /* background-color: lightgrey; */
  width: 250px;
  height: 250px;
  /* margin-top: 100px; */
  position: relative;
  padding: 50px;
`;

const Detail = styled.div`
  background-color: lightgrey;
  position: absolute;
  width: 350px;
  height: 250px;
  top: 320px;
  left: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Earphones = () => {
  const data = useSelector((state:RootState) => state.job.job);
  console.log(data[0],"data2")
   
  return (
    <>
      <ProductItem>
        <SpeakerImg
          src={earphone}
          alt="test"
          width={350}
          height={250}
        ></SpeakerImg>
        {/* <img src={pattern} alt="test2" /> */}
        <Detail>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound. </p>
          <button> SEE PRODUCT</button>
        </Detail>
      </ProductItem>
    </>
  );
};

export default Earphones;
