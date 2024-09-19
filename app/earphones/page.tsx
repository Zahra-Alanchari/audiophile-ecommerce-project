"use client";
import { fetchgetAllProduct } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedId } from "@/redux/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BackLink,
  DetailEarphone,
  DetailEarphoneItems,
} from "../_Style/page.style";
import { RootState } from "@/type";

const page = () => {
  const router = useRouter();
  const data = useSelector((state: RootState) => state.product.product);
  const dispatch = useDispatch<AppDispatch>();
  const earphone = data.filter((item) => item.category === "earphones");

  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.id;
    dispatch(updateSelectedId(target));
  };
  return (
    <>
      <BackLink
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
      >
        Go back
      </BackLink>
      {earphone.map((item) => (
        <DetailEarphoneItems key={item.id}>
          <img src={item.image.mobile} alt="test" width={350} height={350} />
          <DetailEarphone>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link href={`/earphones/${item.slug}`}>
              <button id={String(item.id)} key={item.id} onClick={handleClick}>
                see product
              </button>
            </Link>
          </DetailEarphone>
        </DetailEarphoneItems>
      ))}
    </>
  );
};

export default page;
