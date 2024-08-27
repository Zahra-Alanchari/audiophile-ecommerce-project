import { RootState } from "@/Type/type";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Bill, BtnWrapper, Product, ProductImage, Summary, TotalBillCost } from "./checkOutBill.style";



const CheckOutBill = () => {
  const dataselect = useSelector(
    (state: RootState) => state.product.shoppingItem
  );
  const totalCost = dataselect.reduce((acc, item) => {
    return acc + item.price * (item?.count ? item.count : 0);
  }, 1000);
  const shipping = totalCost * 0.09;
  return (
    <Summary>
      <h1>SUMMARY</h1>
      <>
        {dataselect.map((item) => (
          <Product>
            <div>
              <ProductImage src={item.image.mobile} alt=""></ProductImage>
            </div>
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div>x{item.count}</div>
          </Product>
        ))}
      </>
      {dataselect.length > 0 ? (
        <>
          <div>
            <Bill>
              <h5>TOTAL</h5>
              <p>${totalCost}</p>
            </Bill>
            <Bill>
              <h5>SHIPPING</h5>
              <p>${shipping}</p>
            </Bill>
            <Bill>
              <h5>VAT(INCLUDES)</h5>
              <p>$1000</p>
            </Bill>
            <Bill>
              <h5>GRAND TOTAL</h5>
              <TotalBillCost>{totalCost + shipping}</TotalBillCost>
            </Bill>
          </div>
          <BtnWrapper>
            <button>CONTINUE & PAY</button>
          </BtnWrapper>
        </>
      ) : (
        <h5>NO ITEM ADDED</h5>
      )}
    </Summary>
  );
};

export default CheckOutBill;
