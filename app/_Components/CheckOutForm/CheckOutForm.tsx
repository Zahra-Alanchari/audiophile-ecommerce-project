"use client";
import React from "react";
import { AdressInput, Bulding, BuldingDetail, CheckOutContent, Input, PayMent } from "./checkOutForm.style";



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
