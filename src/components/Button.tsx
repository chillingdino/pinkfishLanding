import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div<{ type: string, disabled:string }>`
  background:${({ disabled }) => (disabled === "true" ?  "rgba(0, 0, 0, 0.48);" : "#000;")};  
  transition: all 0.3s;
  :hover {
    ${({ disabled }) => (disabled === "true" ?  "#000" : "background: #010255;")}; 

  }

  border-radius: 48px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff !important;
  padding: 9px 0;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  width: fit-content;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor:  pointer;
  
`;

const Button = (props: any) => {
  return (
    <ButtonWrapper disabled={props.disabled} type={props.type} onClick={props.onClick}>
      {props.label}
    </ButtonWrapper>
  );
};

export default Button;
