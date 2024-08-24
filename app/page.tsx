"use client";
import Header from "./_Components/Header";
import Contents from "./_Components/Contents";
import Navbar from "./_Components/Navbar";
import Footer from "./_Components/Footer";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  return (
    <>
      <Navbar />

      <Header />
      <Contents />

      <Footer />
    </>
  );
}
