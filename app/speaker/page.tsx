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
  DetailSpeaker,
  DetailSpeakerItems,
} from "../_Style/page.style";

const page = () => {
  const data = useSelector((state: RootState) => state.product.product);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);
  const speaker = data.filter((item) => item.category === "speakers");

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
      {speaker.map((item) => (
        <DetailSpeakerItems key={item.id}>
          <img src={item.image.mobile} alt="test" width={350} height={350} />
          <DetailSpeaker>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link href={`/speaker/${item.slug}`}>
              <button id={String(item.id)} key={item.id} onClick={handleClick}>
                see product
              </button>
            </Link>
          </DetailSpeaker>
        </DetailSpeakerItems>
      ))}
    </>
  );
};

export default page;
