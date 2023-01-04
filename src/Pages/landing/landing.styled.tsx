import styled from "styled-components";

import introBG from "assets/image/bg.svg";

export const LandingWrapper = styled.div`
  background: linear-gradient(270deg, #fffdd3 0%, #bdc6ec 50%, #fffdd3 100%);

  @media screen and (max-width: 768px) {
    background: linear-gradient(
      270deg,
      #fffdd3 0%,
      #ced5f2 25%,
      #ced5f2 75%,
      #fffdd3 100%
    );
  }
  min-height: -webkit-fill-available;
`;

export const IntroWrapper = styled.div`
  /* background: url(${introBG}); */
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 124px;
  @media screen and (max-width: 768px) {
    margin-bottom: 44px;
  }
`;
export const ArrowDiv = styled.div`
  /* background: url(${introBG}); */
  width: 100%;
  display: flex;
  justify-content: center;
  .arrow {
    color: white;
    font-size: 56px;
  }
  transition: all 1s;
  opacity: 0;
  transform: scale(0);
`;

export const WelcomeWrapper = styled.div`
  /*min-height: calc(100vh - 64px);*/
  height: calc(var(--vh, 1vh) * 100 - 64px);
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
  opacity: 0;
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
    grid-template-columns: repeat(1, minmax(0, 384px));
    justify-content: center;
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
    font-size: 16px;
    line-height: 22px;
    color: #131419;
  }
  max-width: 384px;
`;
/*
style 3 blocks white on left 
export const IntroCardGroupMemership = styled.div`
  gap: 32px 32px;
  margin-top: 24px;
  @media screen and (max-width: 768px) {
    /*grid-template-columns: repeat(1, minmax(0, 384px));
    grid-template-rows: repeat(4, minmax(1, 384px));
    justify-content: center;
    grid-template-areas:
    "d1"
    "a1"
    "a2"
    "a3"; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

  }
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "a1 d1"
    "a2 d1"
    "a3 d1";
`;

export const IntroCardMembershipBody = styled.div<{ type: string }>`
  grid-area: ${(props) => (props.type ? props.type : "d1")};
  text-align: left;
  padding: 0px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  max-width:384px;

  border-radius: 20px;
  box-shadow: rgb(42 73 108 / 20%) 0px 8px 40px;
  background-color: #fff;

  img {
    min-width: ${(props) => (props.type === "d1" ? "" : "48px")};
    min-height: ${(props) => (props.type === "d1" ? "" : "48px")};
    margin-right: ${(props) => (props.type === "d1" ? "" : "16px")};
    width: 100%;
    //max-width: 100%;
    max-width: ${(props) => (props.type === "d1" ? "100%" : "48px")};
  }
  h2 {
    font-size: 14px;
    line-height: 22px;
    color: #131419;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    color: #131419;
  }
`;
*/

export const IntroCardGroupMemership = styled.div`
  gap: 32px 32px;
  margin-top: 24px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-areas: "a1 d1";
`;

export const LeftGroupBody = styled.div`
  grid-area: a1;
  border-radius: 20px;
  box-shadow: rgb(42 73 108 / 20%) 0px 8px 40px;
  background-color: #fff;

  height: max-content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  h2 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;
export const RightGroupBody = styled.div`
  grid-area: d1;
  border-radius: 20px;
  box-shadow: rgb(42 73 108 / 20%) 0px 8px 40px;
  background-color: #fff;

  max-width: 384px;

  img {
    width: 100%;
    max-width: 100%;
  }


`;

export const LeftCardBody = styled.div<{ type: string }>`
  text-align: left;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  max-width: 384px;

  img {
    min-width:   48px  ;
    min-height:  48px ;
    margin-right: 16px;
    width: 100%;
    max-width: 48px;
  }
  h2 {
    font-size: 16px;
    line-height: 22px;
    color: #131419;
  }
  p {
    font-size: 16px;
    line-height: 22px;
    color: #131419;
  }
`;
