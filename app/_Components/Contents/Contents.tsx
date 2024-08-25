import React, { useEffect } from "react";
import Speakers from "../Speaker/Speakers";
import Products from "../Product/Products";
import Earphones from "../Earphone/Earphones";
import Info from "../Info/Info";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "@/redux/action";
import { RootState } from "@/Type/type";
import { AppDispatch } from "@/redux/store";
import { Content } from "./contents.style";
import InfoHomePage from "../InfoHomePage/infoHomePage";



const Contents = () => {
  const data = useSelector((state: RootState) => state.job.job);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);
  console.log(data, "data4");
  return (
    <Content>
      <Products />
      <Speakers />
      <Earphones />
      <InfoHomePage/>
    </Content>
  );
};

export default Contents;
