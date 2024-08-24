// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import Header from "./_Components/Header";
import Contents from "./_Components/Contents";
import Navbar from "./_Components/Navbar";
import Footer from "./_Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Header />
      <Contents />

      <Footer />
    </div>
  );
}
