import Image from "next/image";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: black;
  width: 100%;
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
export const BurgurIcon = styled(Image)`
  margin-left: 20px;
  cursor: pointer;
`;
export const BasketIcon = styled(Image)`
  margin-right: 20px;
  cursor: pointer;
`;
export const Dialog = styled.dialog`
  top: 66px;
  color: white;
  width: 100%;
  height: 200%;
  position: fixed;
  display: flex;
  z-index: 1;
  background-color: #534e4e99;
  padding-top: 159px;
  /* margin: 0 auto; */
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
`;
export const BasketCount = styled.span`
  background-color: red;
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  top: -20px;
  right: 35px;
  text-align: center;
  color: white;
  font-weight: bold;
`;