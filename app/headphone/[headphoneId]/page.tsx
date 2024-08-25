"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllJobs } from "@/redux/action";
import { ProductDetailProps, RootState } from "@/Type/type";
import { AppDispatch } from "@/redux/store";
import styled from "styled-components";
import Products from "@/app/_Components/Products";
import Info from "@/app/_Components/Info";
import Footer from "@/app/_Components/Footer";
import Link from "next/link";
import { headphoneCount, sumCard } from "@/redux/slice";
import Navbar from "@/app/_Components/Navbar";

const EarphoneItems = styled.div`
  width: 350px;
  margin: 50px auto;
`;
const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  line-height: 30px;
`;
const AddToCartBtn = styled.button`
  width: 150px;
  height: 40px;
  border: 0;
  background-color: #cc7101;
  color: white;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
`;
const ProductCount = styled.div`
  border: 0;
  background-color: #dbdada;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  & button {
    border: 0;
    background-color: transparent;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const CartCounter = styled.div`
  display: flex;
`;
const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top:30px;
  text-align: start;
`;

const InTHeBox = styled.div`
  & ul {
    list-style-type: none;
    text-align: start;
  }
  & span {
    color: #cc7101;
    margin-right: 10px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  margin: 40px 0 ;
`;
const FirstBoxImg = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  & img {
    margin-bottom: 10px;
  }
`;
const SecondBoxImg = styled.div`
  width: 200px;
  height: 210px;
  margin-left: 10px;
`;

const SeeProductBtn = styled.button`
  width: 130px;
  height: 35px;
  border: 0;
  background-color: #cc7101;
  margin-bottom: 20px;
  color: white;
  cursor: pointer;
`;
const BackLink = styled(Link)`
  text-decoration: none;
  color: grey;
`;
const NewProduct = styled.h3`
  color: #cc7101;
  font-weight: 10;
  letter-spacing: 15px;
`;


export default function ProductDetails({ params }: ProductDetailProps) {
  const { headphoneId } = params;
  const data = useSelector((state: RootState) => state.job.job);
  const basketCart = useSelector((state: RootState) => state.job.cart);
  const headphoneCounter = useSelector((state:RootState) => state.job.headphone);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);

  const product = data.find((item) => String(item.slug) === headphoneId);

  if (!product) {
    return <p>Product not found</p>;
  }

  function decreaseHandelClick(){
    const count = headphoneCounter-1
    dispatch(headphoneCount(count))
  }
  function IncreaseHandelClick(){
    const count = (headphoneCounter)+1
    dispatch(headphoneCount(count))
  }
function handleClickBuyProduct(){
  const count = headphoneCounter
  dispatch(sumCard(headphoneCounter))
}


  return (
    <>
    <Navbar/>
      <EarphoneItems key={product.id}>
        <BackLink href={"/headphone"}>Go back</BackLink>
        <img
          src={`/${product.image.mobile}`}
          alt="test"
          width={350}
          height={350}
        />
        <div>
          {product.new && <NewProduct>NEW PRODUCT</NewProduct>}
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <CartCounter>
            <ProductCount>
              <button onClick={decreaseHandelClick}>-</button>
              <span>{headphoneCounter}</span>
              <button onClick={IncreaseHandelClick}>+</button>
            </ProductCount>
            <AddToCartBtn onClick={handleClickBuyProduct}>
              ADD TO CART
            </AddToCartBtn>
          </CartCounter>
        </div>
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
              <img
                src={`/${product.gallery.first.mobile}`}
                width={200}
                height={100}
              />
              <img
                src={`/${product.gallery.second.mobile}`}
                width={200}
                height={100}
              />
            </FirstBoxImg>
            <SecondBoxImg>
              <img
                src={`/${product.gallery.third.mobile}`}
                width={200}
                height={210}
              />
            </SecondBoxImg>
          </ImageBox>
          <div>
            <h1>YOU MAY ALSO LIKE</h1>
            {product.others.map((item) => (
              <div>
                <img
                  src={`/${item.image.mobile}`}
                  alt="test"
                  width={300}
                  height={140}
                />
                <h2>{item.name}</h2>
                <Link href={`/${item.slug.includes("headphone")? "headphone": "speaker"}/${item.slug}`}>
                  <SeeProductBtn>SEE PRODUCT</SeeProductBtn>
                </Link>
              </div>
            ))}
          </div>
        </Detail>
        <Products />
      </EarphoneItems>
      <Info />
      <Footer />
    </>
  );
}
