import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import Speakers from "./Speakers";
import Products from "./Products";
import Earphones from "./Earphones";
import Info from "./Info"
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "@/redux/action";
import { RootState } from "@/Type/type";
import { AppDispatch } from "@/redux/store";

const Content = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Contents = () => {
    const data = useSelector((state:RootState) => state.job.job);
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(fetchgetAllJobs());
    }, [dispatch]);
    console.log(data,"data4")
  return (
    <Content>
      <Products />
      <Speakers />
      <Earphones />
      <Info/>
    </Content>
  );
};

export default Contents;
