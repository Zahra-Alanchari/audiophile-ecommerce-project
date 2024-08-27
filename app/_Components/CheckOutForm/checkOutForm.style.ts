import styled from "styled-components";

export const Bulding = styled.div`
  padding: 15px;
  & h4 {
    color: #cc7101;
  }
`;
export const BuldingDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const PayMent = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    & div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & div {
        display: flex;
        flex-direction: row;
        margin: 20px;
        border: 1px solid lightgrey;
        width: 355px;
        height: 60px;
        align-items: center;
        justify-content: flex-start;
        border-radius: 5px;
        background-color: white;
      }
    }
  }
`;
export const CheckOutContent = styled.div`
  background-color: #f0f0f0;
  width: 330px;
  margin: 0 auto;
  padding: 0 5px;
  position: relative;
  border-radius: 5px;

  @media screen and (min-width: 1440px) {
    width: 800px;
  }
  & h1 {
    position: relative;
    left: 3%;
    top: 20px;
  }
`;

export const AdressInput = styled.input`
  display: flex;
  margin: 10px 0;
  width: 200px;
  height: 29px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  &:placeholder-shown {
    padding-left: 10px;
  }
  &::placeholder {
    color: #aba5a5;
  }
  @media screen and (min-width: 1440px) {
    width: 733px;
    height: 60px;
  }
`;
export const Input = styled.input`
  display: flex;
  margin: 10px 0;
  width: 200px;
  height: 29px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  &:placeholder-shown {
    padding-left: 10px;
  }
  &::placeholder {
    color: #aba5a5;
  }
  @media screen and (min-width: 1440px) {
    width: 355px;
    height: 60px;
    margin-right: 10px;
  }
`;