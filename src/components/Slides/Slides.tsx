import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Slider from "../Slider";
import { Slide } from "./types";
import icon from "../../assets/backpack.png";

type SlidesProps = {
  slide: Slide;
  slideIndex: number;
};

const SliderContainer = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 0;
  padding-left: 10px;
`;

const Text = styled.div`
  font-family: "Red Hat Display", sans-serif;
  font-size: 1rem;
  color: #2a2a2a;
  margin-bottom: 10px;
`;

const Slides: FunctionComponent<SlidesProps> = ({
  slide,
  slideIndex,
}): JSX.Element => {
  const validateDescription = (data: string) => {
    if (!data.includes("home@")) return data;
    else
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus purus ut metus faucibus, sit amet mollis turpis dignissim. ";
  };
  return (
    <SliderContainer>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <img src={icon} height={30}></img>
        <Title>{slide.name}</Title>
      </div>

      <Text>{validateDescription(slide.description)}</Text>
      <Slider productsCards={slide.cards} slideIndex={slideIndex} />
    </SliderContainer>
  );
};

export default Slides;
