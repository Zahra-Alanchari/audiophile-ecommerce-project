"use client";
// import { fetchgetAllJobs } from '@/redux/action';
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/Type/type";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOutBill from "../_Components/CheckoutBill/CheckOutBill";

const page = () => {
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchgetAllJobs());
  // }, [dispatch]);
  // console.log(data, "data7")
  return (
    <div>
      <CheckOutBill />
    </div>
  );
};

export default page;
