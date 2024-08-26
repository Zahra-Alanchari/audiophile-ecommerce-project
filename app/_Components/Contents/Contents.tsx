import React, { useEffect } from "react";
import Speakers from "../Speaker/Speakers";
import Products from "../Product/Products";
import Earphones from "../Earphone/Earphones";
import { useDispatch } from "react-redux";
import { fetchgetAllProduct } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { Content } from "./contents.style";
import InfoHomePage from "../InfoHomePage/infoHomePage";

const Contents = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);
  return (
    <Content>
      <Products />
      <Speakers />
      <Earphones />
      <InfoHomePage />
    </Content>
  );
};

export default Contents;
