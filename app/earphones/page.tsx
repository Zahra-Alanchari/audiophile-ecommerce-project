"use client";
import { fetchgetAllProduct } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/Type/type";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../_Components/Navbar/Navbar";
import Footer from "../_Components/Footer/Footer";
import styled from "styled-components";
import { updateSelectedId } from "@/redux/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BackLink } from "../_Style/page.style";

const EarphoneItems = styled.div`
  width: 350px;
  margin: 50px auto;
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  line-height: 30px;
  & button {
    width: 150px;
    height: 40px;
    border: 0;
    background-color: #cc7101;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: #cc7101;
      transform: scale(1.1);
    }
    &:active {
      background-color: #cc7101;
      transform: translateY(0.2rem);
    }
  }
`;

const page = () => {
  const router = useRouter();
  const data = useSelector((state: RootState) => state.product.product);
  // console.log(data,"data100")
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);
  const earphone = data.filter((item) => item.category === "earphones");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.id;
    dispatch(updateSelectedId(target));
  };
  return (
    <>
      {/* <Navbar /> */}
      <BackLink
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
      >
        Go back
      </BackLink>
      {earphone.map((item) => (
        <EarphoneItems key={item.id}>
          <img src={item.image.mobile} alt="test" width={350} height={350} />
          <Detail>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link href={`/earphones/${item.slug}`}>
              <button id={String(item.id)} key={item.id} onClick={handleClick}>
                see product
              </button>
            </Link>
          </Detail>
        </EarphoneItems>
      ))}
      {/* <Footer /> */}
    </>
  );
};

export default page;
