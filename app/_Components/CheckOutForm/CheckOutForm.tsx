"use client";
import React from "react";
import styled from "styled-components";

const Bulding = styled.div`
  /* background-color: blue; */
  padding: 15px;
`;
const BuldingDetail = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;

  & input {
    display: flex;
    margin: 10px 0;
  }
`;
const PayMent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CheckOutForm = () => {
  return (
    <div>
      <div>
        <h1>CHECKOUT</h1>
        <Bulding>
          <h4>BULDING DETAILS</h4>
          <BuldingDetail>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Alex Ward" />
            </div>
            <div>
              <label htmlFor="">Email Address</label>
              <input type="text" placeholder="Alex@mail.com" />
            </div>
            <div>
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="+1 2334 453" />
            </div>
          </BuldingDetail>
        </Bulding>

        <Bulding>
          <h4>SHIPPING INFO</h4>
          <BuldingDetail>
            <div>
              <label htmlFor="">Address</label>
              <input type="text" placeholder="1136 william avn." />
            </div>
            <div>
              <label htmlFor="">ZIP Code</label>
              <input type="text" placeholder="1106" />
            </div>
            <div>
              <label htmlFor="">City</label>
              <input type="text" placeholder="New York" />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <input type="text" placeholder="United States" />
            </div>
          </BuldingDetail>
        </Bulding>

        <Bulding>
          <h4>PAYMENT DETAILS</h4>
          <label htmlFor="">Payment Method</label>
          <PayMent>
            <div>
              <input type="radio" id="1" name="money" value="1" />
              <label htmlFor="1">e-Money</label>
              <input type="radio" id="2" name="money" value="2" />
              <label htmlFor="2">Cash on Dellivery</label>
            </div>
            
          </PayMent>
          <BuldingDetail>
            <div>
              <div>
                <label htmlFor="">e-Money Number</label>
                <input type="text" placeholder="234165716" />
              </div>
              <div>
                <label htmlFor="">e-Money PIN</label>
                <input type="text" placeholder="4524" />
              </div>
            </div>
          </BuldingDetail>
        </Bulding>
      </div>
    </div>
  );
};

export default CheckOutForm;
