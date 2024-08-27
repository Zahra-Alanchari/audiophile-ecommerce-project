import styled from "styled-components";

export const ProductImage = styled.img`
  width: 65px;
  height: 65px;
`;
export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
export const Summary = styled.div`
  width: 350px;
  margin: 0 auto;

  background-color: #f0f0f0;
  border-radius: 5px;

  @media screen and (min-width: 765px) {
    margin: 21px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 550px;
  }
  & h1 {
    position: relative;
    left: 3%;
  }

  & h5 {
    text-align: center;
  }
  & button {
    background-color: #cc7101;
    width: 233px;
    color: white;
    height: 41px;
    border: 0;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
export const Bill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TotalBillCost = styled.p`
  color: #cc7101;
`;
