"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetAllProduct } from "@/redux/action";
import { ProductDetailProps, RootState } from "@/Type/type";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { addToShoppingCart, sumCard } from "@/redux/slice";
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
import { useRouter } from "next/navigation";

export default function ProductDetails({ params }: ProductDetailProps) {
  const [productCount, setProductCount] = useState(0);
  const { earphoneId } = params;
  const data = useSelector((state: RootState) => state.product.product);
  const product = data.find((item) => item.slug === earphoneId);
  const dataselect = useSelector(
    (state: RootState) => state.product.shoppingItem
  );
  const earphoneCounter = useSelector(
    (state: RootState) => state.product.earphone
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);


  if (!product) {
    return <p>Product not found</p>;
  }

  function decreaseHandelClick() {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  }
  function IncreaseHandelClick() {
    setProductCount(productCount + 1);
  }
  function handleClickBuyProduct(e: React.MouseEvent<HTMLButtonElement>) {
    const targetId = e.currentTarget.id;
    const selectedItem = data.find((item) => item.id.toString() === targetId);
    if (productCount > 0) {
      dispatch(addToShoppingCart({ selectedItem, count: productCount }));
    }
    dispatch(sumCard(earphoneCounter));
    setProductCount(0);
  }

  const router = useRouter();
  return (
    <>
      <EarphoneItems key={product.id}>
        <BackLink
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
        >
          Go back
        </BackLink>
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
                <span>{productCount}</span>
                <button onClick={IncreaseHandelClick}>+</button>
              </ProductCount>
              <AddToCartBtn
                id={product.id.toString()}
                onClick={handleClickBuyProduct}
              >
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
    </>
  );
}
