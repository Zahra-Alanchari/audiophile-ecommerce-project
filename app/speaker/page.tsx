"use client";
import { fetchgetAllProduct } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/Type/type";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../_Components/Navbar/Navbar";
import styled from "styled-components";
import Footer from "../_Components/Footer/Footer";
import { updateSelectedId } from "@/redux/slice";
import Link from "next/link";

const SpeakerItems = styled.div`
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
  }
`;

const page = () => {
  const data = useSelector((state: RootState) => state.job.job);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);
  const speaker = data.filter((item) => item.category === "speakers");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.id;
    dispatch(updateSelectedId(target));
  };
  return (
    <>
      <Navbar />
      {speaker.map((item) => (
        <SpeakerItems key={item.id}>
          <img src={item.image.mobile} alt="test" width={350} height={350} />
          <Detail>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link href={`/speaker/${item.slug}`}>
              <button id={String(item.id)} key={item.id} onClick={handleClick}>
                see product
              </button>
            </Link>
          </Detail>
        </SpeakerItems>
      ))}
      <Footer />
    </>
  );
};

export default page;
