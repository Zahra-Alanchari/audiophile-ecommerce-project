import Link from "next/link";
import styled from "styled-components";

export const Footers = styled.footer`
  background-color: black;
  margin-top: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 40px 5px;
  @media screen and (min-width: 760px) {
    align-items: self-start;
    padding-left: 20px;
  }

  & p {
    color: grey;
    width: 380px;
    line-height: 25px;
    text-align: center;
    @media screen and (min-width: 760px) {
      width: 580px;
      text-align: start;
    }
  }
`;

export const List = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  & a:hover{
    color: #cc7101;
  }
  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    align-self: end;
    display: flex;
    position: relative;
    top: -61px;
    margin-right: 60px;
  }
`;