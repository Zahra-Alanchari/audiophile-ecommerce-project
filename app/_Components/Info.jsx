import Image from "next/image";
import React from "react";
import pics from "../../public/assets/shared/mobile/image-best-gear.jpg";
import styled from "styled-components";

const InfoImg = styled(Image)`
  background-color: transparent;
  border-radius: 10px;
`;
const Infos = styled.div`
  width: 350px;
  top: 250px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  position: relative;
  padding: 50px;
  justify-content: center;
`;



const Info = () => {
  return (
    <>
      <Infos>
        <div>
          <h1>header</h1>
          <p>introduction</p>
        </div>
        <InfoImg src={pics} alt="test" width={350} height={250}></InfoImg>
      </Infos>
    </>
  );
};

export default Info;
