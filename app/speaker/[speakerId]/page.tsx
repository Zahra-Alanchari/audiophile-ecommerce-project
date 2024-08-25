"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "@/redux/action";
import { ProductDetailProps, RootState } from "@/Type/type";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { speakerCount, sumCard } from "@/redux/slice";
import Footer from "@/app/_Components/Footer/Footer";
import Navbar from "@/app/_Components/Navbar/Navbar";
import Info from "@/app/_Components/Info/Info";
import Products from "@/app/_Components/Product/Products";
import {
  AddToCartBtn,
  BackLink,
  CartCounter,
  Detail,
  EarphoneItems,
  Feature,
  FirstBoxImg,
  ImageBox,
  InTHeBox,
  NewProduct,
  ProductCartWrapper,
  ProductCount,
  ProductProfileWrapper,
  ProductWrapper,
  RecommendProduct,
  SecondBoxImg,
  SeeProductBtn,
} from "@/app/_Style/page.style";

export default function ProductDetails({ params }: ProductDetailProps) {
  const { speakerId } = params;
  const data = useSelector((state: RootState) => state.job.job);
  const speakerCounter = useSelector((state: RootState) => state.job.speaker);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);

  const product = data.find((item) => String(item.slug) === speakerId);

  if (!product) {
    return <p>Product not found</p>;
  }

  function decreaseHandelClick() {
    const count = speakerCounter - 1;
    dispatch(speakerCount(count));
  }
  function IncreaseHandelClick() {
    const count = speakerCounter + 1;
    dispatch(speakerCount(count));
  }
  function handleClickBuyProduct() {
    const count = speakerCounter;
    dispatch(sumCard(speakerCounter));
  }

  return (
    <>
      <Navbar />
      <EarphoneItems key={product.id}>
        <BackLink href={"/speaker"}>Go back</BackLink>
        <ProductProfileWrapper>
          <img
            src={`/${product.image.mobile}`}
            alt="test"
            width={350}
            height={350}
          />
          <ProductCartWrapper>
            {product.new && <NewProduct>NEW PRODUCT</NewProduct>}
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <CartCounter>
              <ProductCount>
                <button onClick={decreaseHandelClick}>-</button>
                <span>{speakerCounter}</span>
                <button onClick={IncreaseHandelClick}>+</button>
              </ProductCount>
              <AddToCartBtn onClick={handleClickBuyProduct}>
                ADD TO CART
              </AddToCartBtn>
            </CartCounter>
          </ProductCartWrapper>
        </ProductProfileWrapper>
        <Detail>
          <Feature>
            <h1>FEATURES</h1>
            <p>{product.features}</p>
          </Feature>
          <InTHeBox>
            <h1>IN THE BOX</h1>
            <ul>
              {product.includes.map((item) => (
                <li>
                  <span>{item.quantity}x</span> {item.item}
                </li>
              ))}
            </ul>
          </InTHeBox>
          <ImageBox>
            <FirstBoxImg>
              <img src={`/${product.gallery.first.mobile}`} />
              <img src={`/${product.gallery.second.mobile}`} />
            </FirstBoxImg>
            <SecondBoxImg>
              <img src={`/${product.gallery.third.mobile}`} />
            </SecondBoxImg>
          </ImageBox>
          <h1>YOU MAY ALSO LIKE</h1>
          <RecommendProduct>
            {product.others.map((item) => (
              <div>
                <img src={`/${item.image.mobile}`} alt="test" />
                <h2>{item.name}</h2>
                <Link
                  href={`/${
                    item.slug.includes("headphone") ? "headphone" : "speaker"
                  }/${item.slug}`}
                >
                  <SeeProductBtn>SEE PRODUCT</SeeProductBtn>
                </Link>
              </div>
            ))}
          </RecommendProduct>
        </Detail>
      </EarphoneItems>
      <ProductWrapper>
        <Products />
      </ProductWrapper>
      <Info />
      <Footer />
    </>
  );
}
