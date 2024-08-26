"use client";
import Header from "./_Components/Header/Header";
import Contents from "./_Components/Contents/Contents";
import Navbar from "./_Components/Navbar/Navbar";
import Footer from "./_Components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchgetAllProduct } from "@/redux/action";

export default function Home() {
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchgetAllProduct());
  // }, [dispatch]);
  return (
    <>
      <Navbar />

      <Header />
      <Contents />

      <Footer />
    </>
  );
}
