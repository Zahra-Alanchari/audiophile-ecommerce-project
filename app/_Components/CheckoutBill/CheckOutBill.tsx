import { RootState } from "@/Type/type";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProductImage = styled.img`
  width: 65px;
  height: 65px;
`;
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
`;
const Summary = styled.div`
  width: 300px;
  padding: 20px;
  background-color: grey;
`;

const CheckOutBill = () => {
  const dataselect = useSelector((state: RootState) => state.job.shoppingItem);
  // console.log(dataselect, "count koo");
  const totalCost = dataselect.reduce((acc, item) => {
    return acc + item.price * (item?.count ? item.count : 0);
  }, 1000);
  const shipping = totalCost * 0.09;
  // console.log(totalCost, "factor");
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
            <div>
              <h3>TOTAL</h3>
              <p>${totalCost}</p>
            </div>
            <div>
              <h3>SHIPPING</h3>
              <p>${shipping}</p>
            </div>
            <div>
              <h3>VAT(INCLUDES)</h3>
              <p>$1000</p>
            </div>
            <div>
              <h3>GRAND TOTAL</h3>
              <p>{totalCost + shipping}</p>
            </div>
          </div>
          <button>CONTINUE & PAY</button>
        </>
      ):<h3>NO ITEM ADDED</h3>}
    </Summary>
  );
};

export default CheckOutBill;
