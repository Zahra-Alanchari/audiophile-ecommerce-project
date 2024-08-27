"use client";
// import { fetchgetAllJobs } from '@/redux/action';
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/Type/type";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOutBill from "../_Components/CheckoutBill/CheckOutBill";
import CheckOutForm from "../_Components/CheckOutForm/CheckOutForm";
import styled from "styled-components";
import Navbar from "../_Components/Navbar/Navbar";
import Footer from "../_Components/Footer/Footer";

const CheckRout = styled.div`
  /* background-color: lightgrey;
  width: 100%;
  height: 100; */
  @media screen and (min-width: 765px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 200px;
  }
`;
const page = () => {
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchgetAllJobs());
  // }, [dispatch]);
  // console.log(data, "data7")
  return (
    <>
      <Navbar />
      <CheckRout>
        <CheckOutForm />
        <CheckOutBill />
      </CheckRout>
      <Footer />
    </>
  );
};

export default page;
