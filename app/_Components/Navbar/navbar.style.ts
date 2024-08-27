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
  top: 1px;
  color: white;
  width: 100%;
  height: 200%;
  position: fixed;
  display: flex;
  z-index: 1;
  background-color: #000000d6;
  padding-top: 159px;

  flex-direction: column;
  align-items: center;
  & ul {
    list-style-type: none;
    & li {
      padding: 25px;

      & a {
        text-decoration: none;
        color: white;
        &:hover {
          color: #cc7101;
        }
      }
    }
    font-size: 2rem;
  }
  & button {
    width: 150px;
    height: 30px;
    border-radius: 5px;
    border: 0;
    background-color: #cc7101;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
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
