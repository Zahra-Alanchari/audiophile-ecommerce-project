"use client";
import React from "react";
import styled from "styled-components";

const Bulding = styled.div`
  /* background-color: blue; */
  padding: 15px;
  & h4 {
    color: #cc7101;
  }
`;
const BuldingDetail = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const PayMent = styled.div`
  /* background-color: white; */
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    & div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & div {
        display: flex;
        flex-direction: row;
        margin: 20px;
        border: 1px solid lightgrey;
        width: 355px;
        height: 60px;
        align-items: center;
        justify-content: flex-start;
        border-radius: 5px;
        background-color: white;
      }
    }
  }
`;
const CheckOutContent = styled.div`
  background-color: #f0f0f0;
  width: 330px;
  margin: 0 auto;
  padding: 0 5px;
  position: relative;
  border-radius: 5px;
  
  @media screen and (min-width: 1440px) {
    width: 800px;
  }
  & h1 {
    position: relative;
    left: 3%;
    top: 20px;
  }
`;

const AdressInput = styled.input`
  display: flex;
  margin: 10px 0;
  width: 200px;
  height: 29px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  &:placeholder-shown {
    padding-left: 10px;
  }
  &::placeholder {
    color: #aba5a5;
  }
  @media screen and (min-width: 1440px) {
    width: 733px;
    height: 60px;
  }
`;
const Input = styled.input`
  display: flex;
  margin: 10px 0;
  width: 200px;
  height: 29px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  &:placeholder-shown {
    padding-left: 10px;
  }
  &::placeholder {
    color: #aba5a5;
  }
  @media screen and (min-width: 1440px) {
    width: 355px;
    height: 60px;
    margin-right: 10px;
  }
`;

const CheckOutForm = () => {
  return (
    <div>
      <CheckOutContent>
        <h1>CHECKOUT</h1>
        <Bulding>
          <h4>BULDING DETAILS</h4>
          <BuldingDetail>
            <div>
              <label htmlFor="">Name</label>
              <Input type="text" placeholder="Alex Ward" />
            </div>
            <div>
              <label htmlFor="">Email Address</label>
              <Input type="text" placeholder="Alex@mail.com" />
            </div>
            <div>
              <label htmlFor="">Phone Number</label>
              <Input type="text" placeholder="+1 2334 453" />
            </div>
          </BuldingDetail>
        </Bulding>

        <Bulding>
          <h4>SHIPPING INFO</h4>
          <BuldingDetail>
            <div>
              <label htmlFor="">Address</label>
              <AdressInput type="text" placeholder="1136 william avn." />
            </div>
            <div>
              <label htmlFor="">ZIP Code</label>
              <Input type="text" placeholder="1106" />
            </div>
            <div>
              <label htmlFor="">City</label>
              <Input type="text" placeholder="New York" />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <Input type="text" placeholder="United States" />
            </div>
          </BuldingDetail>
        </Bulding>

        <Bulding>
          <h4>PAYMENT DETAILS</h4>
          <label htmlFor="">Payment Method</label>
          <PayMent>
            <div>
              <div>
                <input type="radio" id="1" name="money" value="1" />
                <label htmlFor="1">e-Money</label>
              </div>
              <div>
                <input type="radio" id="2" name="money" value="2" />
                <label htmlFor="2">Cash on Dellivery</label>
              </div>
            </div>
          </PayMent>
          <BuldingDetail>
            <div>
              <div>
                <label htmlFor="">e-Money Number</label>
                <Input type="text" placeholder="234165716" />
              </div>
              <div>
                <label htmlFor="">e-Money PIN</label>
                <Input type="text" placeholder="4524" />
              </div>
            </div>
          </BuldingDetail>
        </Bulding>
      </CheckOutContent>
    </div>
  );
};

export default CheckOutForm;
