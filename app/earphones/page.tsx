"use client";
import { fetchgetAllJobs } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/Type/type";
import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Navbar from "../_Components/Navbar";
import Footer from "../_Components/Footer";
import styled from "styled-components";
import { updateSelectedId } from "@/redux/slice";

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
  }
`;

const page = () => {
  const data = useSelector((state: RootState) => state.job.job);
  const idd = useSelector((state: RootState) => state.job.id);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);
  const earphone = data.filter((item) => item.category === "earphones");
  console.log(earphone, "earphone");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.id; 
    dispatch(updateSelectedId(target));
  };
  console.log(idd, "click");
  return (
    <>
      <Navbar />
      {earphone.map((item) => (
        <EarphoneItems key={item.id}>
          <img src={item.image.mobile} alt="test" width={350} height={350} />
          <Detail>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <button id={String(item.id)} key={item.id} onClick={handleClick}>see product</button>
          </Detail>
        </EarphoneItems>
      ))}
      <Footer />
    </>
  );
};

export default page;
