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
  padding: 0 10px;
  /* background-color: red; */
`;
const Summary = styled.div`
  width: 350px;
  margin: 0 auto;
  /* margin-bottom: 2000px; */
  background-color: #f0f0f0;
  border-radius: 5px;
  /* padding-left:15px; */
  @media screen and (min-width: 765px) {
    margin: 21px 0;
    /* padding: 5px; */
  }
  @media screen and (min-width: 1440px) {
    width: 550px;
  }
  & h1 {
    position: relative;
    left: 3%;
  }

  & h5 {
    text-align: center;
  }
  & button {
    background-color: #cc7101;
    width: 233px;
    color: white;
    height: 41px;
    border: 0;
    margin-bottom: 20px; 
    cursor: pointer;
  }
`;
const Bill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px ;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TotalBillCost = styled.p`
  color: #cc7101;
`

const CheckOutBill = () => {
  const dataselect = useSelector(
    (state: RootState) => state.product.shoppingItem
  );
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
