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
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    margin-top: 30px;
  }
`;
export const BackLink = styled.button`
  text-decoration: none;
  color: grey;
  border: 0;
  background-color: transparent;
  padding: 20px;
`;
const page = () => {
  const router= useRouter()
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchgetAllJobs());
  // }, [dispatch]);
  // console.log(data, "data7")
  return (
    <>
      {/* <Navbar /> */}
      <BackLink onClick={(e) => { e.preventDefault(); router.back(); }}>Go back</BackLink>
      <CheckRout>
        <CheckOutForm />
        <CheckOutBill />
      </CheckRout>
      {/* <Footer /> */}
    </>
  );
};

export default page;
