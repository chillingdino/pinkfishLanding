import { Container } from "components";
import Button from "components/Button";
import React from "react";
import { HeaderWrapper } from "./header.styled";

const Header = () => {
  const handleClick = () => {};

  return (
    <Container>
      <HeaderWrapper>
        <h1>
          OxyGenes
        </h1>
        {/*<Button label="DAPP" onClick={handleClick} />*/}
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
