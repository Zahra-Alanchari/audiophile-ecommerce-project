import { RootState } from "@/Type/type";
import React from "react";
import { useSelector } from "react-redux";

const CheckOutBill = () => {
  const dataselect = useSelector((state: RootState) => state.job.shoppingItem);
  console.log(dataselect,"count koo")
  return (
    <div>
      <h1>SUMMARY</h1>
      {dataselect.map((item) => (
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
          <div>x{ item.count}</div>
        </div>
      ))}
    </div>
  );
};

export default CheckOutBill;
