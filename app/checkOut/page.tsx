"use client";
import React from "react";
import CheckOutBill from "../_Components/CheckoutBill/CheckOutBill";
import CheckOutForm from "../_Components/CheckOutForm/CheckOutForm";

import { useRouter } from "next/navigation";
import { BackLink, CheckRout } from "../_Style/page.style";


const page = () => {
  const router= useRouter()
  return (
    <>
      <BackLink onClick={(e) => { e.preventDefault(); router.back(); }}>Go back</BackLink>
      <CheckRout>
        <CheckOutForm />
        <CheckOutBill />
      </CheckRout>
    </>
  );
};

export default page;
