import { Container } from "components";
import Button from "components/Button";
import { Header } from "layout";
import { useCallback, useEffect, useState } from "react";
import {
  IntroButtonWrapper,
  IntroCardBody,
  IntroCardGroup,
  IntroCardWrapper,
  IntroTitleWrapper,
  IntroWrapper,
  WelcomeWrapper,
} from "./landing.styled";

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

const IntroCard = (props: any) => {
  return (
    <IntroCardBody>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </IntroCardBody>
  );
};

const IntroPart = () => {
  const [y, setY] = useState(0);
  
  useEffect(() => {
    const titleSection: any = document.getElementById("intro-title");
    titleSection.style.opacity = "1";
    titleSection.style.transform = "scale(1)";
  }, []);

  const handleScroll = useCallback(
    (e: any) => {
      const currentTarget = e.currentTarget;
      const activeDiv: any = document.getElementById("intro-why");
      console.log("s: "+ currentTarget.scrollY);
      console.log("y: "+ y);
      if (y > currentTarget.scrollY) {
        if (activeDiv.getBoundingClientRect().top > window.innerHeight - 50) {
          activeDiv.style.transform = "translateY(100px)";
          activeDiv.style.opacity = "0";
          console.log("giu");
        }
      } else   {
        if (activeDiv.getBoundingClientRect().top <= window.innerHeight - 50) {
          activeDiv.style.transform = "translateY(0)";
          activeDiv.style.opacity = "1";
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
            <h2>Not only a Web3 content creator platform.</h2>
            <p />
            <IntroButtonWrapper>
              <Button label="Web App" type="white" disabled="true" onClick={() => {}} />
            </IntroButtonWrapper>
          </IntroTitleWrapper>
        </Container>
      </WelcomeWrapper>
      <Container>
        <IntroCardWrapper id="intro-why">
          <h1>Features</h1>
          <p>What sets us apart.</p>
          <IntroCardGroup>
            {cardData.map((item: any, key: any) => (
              <IntroCard key={key} title={item.title} desc={item.desc} />
            ))}
          </IntroCardGroup>
        </IntroCardWrapper>
      </Container>
    </IntroWrapper>
  );
};

export default IntroPart;
