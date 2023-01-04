import { Container } from "components";
import Button from "components/Button";
import { Header } from "layout";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import {
  ArrowDiv,
  IntroButtonWrapper,
  IntroCardBody,
  IntroCardGroup,
  IntroCardGroupMemership,
  //IntroCardMembershipBody,
  IntroCardWrapper,
  IntroTitleWrapper,
  IntroWrapper,
  LeftCardBody,
  LeftGroupBody,
  RightGroupBody,
  WelcomeWrapper,
} from "./landing.styled";
//import homeFrame from "./HomeMFrame.png"
const cardData = [
  {
    title: "Treasury-Backed Insurance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, quam eu fermentum fringilla",
  },
  {
    title: "Passive Ethereum Reflections",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, quam eu fermentum fringilla",
  },
  {
    title: "Optimized Treasury Investment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, quam eu fermentum fringilla",
  },
  {
    title: "Optimized Treasury Investment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, quam eu fermentum fringilla",
  },
];
const membershipData = [
  /*{
    type: "d1",
    //img:homeFrame
  },*/
  {
    title: "Treasury-Backed Insurance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    type: "a1",
  },
  {
    title: "Passive Ethereum Reflections",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    type: "a2",
  },
  {
    title: "Optimized Treasury Investment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    type: "a3",
  },
];

const IntroCard = (props: any) => {
  return (
    <IntroCardBody>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </IntroCardBody>
  );
};
/*
const IntroCardMemberships = (props: any) => {
  return (
    <IntroCardMembershipBody type={props.type}>
      {props.type != "d1" ? (
        <React.Fragment>
          <img></img>
          <div>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
          </div>
        </React.Fragment>
      ) : (
        <img src={"./HomeMFrame.png"} />
      )}
    </IntroCardMembershipBody>
  );
};
*/

const LeftCardBodyy = (props: any) => {
  return (
    <LeftCardBody type={props.type}>
      <React.Fragment>
        <img></img>
        <div>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </React.Fragment>
    </LeftCardBody>
  );
};

const IntroPart = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const titleSection: any = document.getElementById("intro-title");
    const icon: any = document.getElementById("arrowDiv");
    titleSection.style.opacity = "1";
    titleSection.style.transform = "scale(1)";

    icon.style.opacity = "1";
    icon.style.transform = "scale(1)";
  }, []);

  const handleScroll = useCallback(
    (e: any) => {
      const currentTarget = e.currentTarget;
      const activeDiv: any = document.getElementById("intro-why");
      const arrowDiv: any = document.getElementById("arrowDiv");

      console.log("s: " + currentTarget.scrollY);
      console.log("y: " + y);
      if (y > currentTarget.scrollY) {
        if (activeDiv.getBoundingClientRect().top > window.innerHeight - 50) {
          activeDiv.style.transform = "translateY(100px)";
          activeDiv.style.opacity = "0";
          console.log("giu");
        }
      } else {
        if (activeDiv.getBoundingClientRect().top <= window.innerHeight - 50) {
          activeDiv.style.transform = "translateY(0)";
          activeDiv.style.opacity = "1";

          arrowDiv.style.opacity = "0";
        }
      }
      setY(currentTarget.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  //console.log(y);
  return (
    <IntroWrapper>
      <WelcomeWrapper>
        {/*<Header />*/}
        <Container>
          <IntroTitleWrapper id="intro-title">
            <h1>
              PinkFish <span id="badge">soon</span>
            </h1>
            <h2>Not only a Web3 content creator platform</h2>
            <p />
            <IntroButtonWrapper>
              <Button
                label="Web App"
                type="white"
                disabled="true"
                onClick={() => {}}
              />
            </IntroButtonWrapper>
          </IntroTitleWrapper>
        </Container>
      </WelcomeWrapper>
      <ArrowDiv id="arrowDiv">
        <FaArrowDown className="arrow" id="icon" />
      </ArrowDiv>

      <Container>
        <IntroCardWrapper id="intro-why">
          <h1>Features</h1>
          <p>What sets us apart</p>
          <IntroCardGroup>
            {cardData.map((item: any, key: any) => (
              <IntroCard key={key} title={item.title} desc={item.desc} />
            ))}
          </IntroCardGroup>

          <IntroCardGroupMemership>
            <LeftGroupBody>
            <h2>
              Memerships
            </h2>
              {membershipData.map((item: any, key: any) => (
                <LeftCardBodyy
                  key={key}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              ))}

            </LeftGroupBody>
            <RightGroupBody>
              <img src={"./HomeMFrame.png"} />
            </RightGroupBody>
          </IntroCardGroupMemership>
          {/*<IntroCardGroupMemership>
            {membershipData.map((item: any, key: any) => (
              <IntroCardMemberships
                key={key}
                title={item.title}
                desc={item.desc}
                type={item.type ? item.type : "d1"}
                img={item.img}
              />
            ))}
          </IntroCardGroupMemership>
          */}
        </IntroCardWrapper>
      </Container>
    </IntroWrapper>
  );
};

export default IntroPart;
