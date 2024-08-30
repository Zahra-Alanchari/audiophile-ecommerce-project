"use client";
import { fetchgetAllProduct } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/type/type";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedId } from "@/redux/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BackLink,
  DetailHeadphone,
  DetailHeadphoneItems,
} from "../_Style/page.style";

const page = () => {
  const data = useSelector((state: RootState) => state.product.product);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);
  const headphone = data.filter((item) => item.category === "headphones");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.id;
    dispatch(updateSelectedId(target));
  };
  const router = useRouter();
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
      {headphone.map((item) => (
        <DetailHeadphoneItems key={item.id}>
          <img src={item.image.mobile} alt="test" width={350} height={350} />
          <DetailHeadphone>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link href={`/headphone/${item.slug}`}>
              <button id={String(item.id)} key={item.id} onClick={handleClick}>
                see product
              </button>
            </Link>
          </DetailHeadphone>
        </DetailHeadphoneItems>
      ))}
    </>
  );
};

export default page;
