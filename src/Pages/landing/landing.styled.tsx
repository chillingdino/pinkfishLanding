import styled from "styled-components";

import introBG from "assets/image/bg.svg";

export const LandingWrapper = styled.div`
  background: linear-gradient(270deg, #FFFDD3 0%, #BDC6EC 50%, #FFFDD3 100%);

  @media screen and (max-width: 768px) {
    background: linear-gradient(270deg, #FFFDD3 0%, #CED5F2 25%, #CED5F2 75%, #FFFDD3 100%);
  }
`;

export const WelcomeWrapper = styled.div`
  min-height: 100vh;
`;

export const IntroWrapper = styled.div`
  /* background: url(${introBG}); */
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

export const IntroTitleWrapper = styled.div`
  transition: all 1s;
  opacity: 0;
  transform: scale(0);
  padding: 180px 0 100px;
  text-align: center;

  h1 {
    font-size: clamp(40px, 6vw, 44px);
    font-weight: 700;
    color: black !important;
    @media screen and (max-width: 768px) {
      line-height: 50px;
    }
    margin-bottom: 4px;
    
  }
  span {
      vertical-align: middle;
      font-size: 16px;
      background: rgba(0, 0, 0, 0.06);
      border-radius: 12px;
      padding: 6px 10px;
      margin-left: 12px;
      /* text-transform: uppercase; */
      font-weight: 700;
      /* letter-spacing: 2px; */
      color: rgba(0, 0, 0, 0.48);
    }
  h2 {
    font-size: 24px;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.48);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0px;
    margin-bottom: 32px;
  }
`;

export const IntroButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IntroCardWrapper = styled.div`
  transition: all 1s;
  text-align: center;
  transform: translateY(100px);
  opacity:0;
  h1,
  h2,
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: clamp(32px, 6vw, 32px);
    font-weight: 700;
    color: black !important;
    @media screen and (max-width: 768px) {
      line-height: 50px;
    }
  }
  & > p {
    font-size: 20px;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.48);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0px;
    margin-bottom: 32px;
  }
`;

export const IntroCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const IntroCardBody = styled.div`
  padding: 32px;
  text-align: center;
  border-radius: 20px;
  box-shadow: rgb(42 73 108 / 20%) 0px 8px 40px;
  background-color: #fff;
  h2 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    color: #131419;
  }
`;

export const StableWrapper = styled.div`
  padding: 90px 0;
`;

export const StableTitleWrapper = styled.div`
  h1,
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 36px;
    text-align: center;
    line-height: 35px;
    color: black !important;
  }
  & > p {
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    z-index: 9999;
    line-height: 20px;
    margin-top: 10px;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, #4986e7 0%, #6ac9f5 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StableCardWrapper = styled.div`
  padding: 50px;
  margin: 50px auto 0px;
  max-width: 820px;
  border-radius: 20px;
  background-color: rgb(195, 198, 212);
  box-shadow: rgb(0 0 0 / 30%) 0px 8px 32px;
  position: relative;
  box-sizing: border-box;
  max-width: 638px;
  width: 100%;
`;

export const StableButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const StableForm = styled.div`
  width: 90%;
  margin: auto;
`;

export const StableFormLabel = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 600;
  }
`;

export const StableInput = styled.div`
  margin-top: 10px;
  display: flex;
  border-radius: 100px;
  background: white;
  padding: 10px 20px;
  input {
    border: none;
    outline: none;
    width: -webkit-fill-available;
  }
`;

export const ExchangeSymbol = styled.div`
  cursor: pointer;
  display: flex;
  margin: 40px auto;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgb(150, 159, 201);
  border-radius: 100px;
  color: white;
  svg {
    transform: rotate(90deg);
  }
`;

export const StableSwapBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
