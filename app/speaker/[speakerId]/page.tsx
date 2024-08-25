"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "@/redux/action"; 
import { ProductDetailProps, RootState } from "@/Type/type";
import { AppDispatch } from "@/redux/store";

export default function ProductDetails({params}:ProductDetailProps) {
const { speakerId } = params;
console.log(params,"router")
  const data = useSelector((state: RootState) => state.job.job);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);

  const product = data.find((item) => String(item.id) === speakerId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <div>{product.name}</div>;
}
