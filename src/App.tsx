import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slides from "./components/Slides";
import MarketSelect from "./components/MarketSelect";
import { Slide } from "./components/Slides/types";
import "./assets/css/fonts/fonts.css";

const Home = styled.div`
  padding: 12px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Text = styled.div`
  font-size: 1rem;
  color: #2a2a2a;
`;

export default function App() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [market, setMarket] = useState("es");

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CUSTOM_CORS}/https://api-${market}.exoticca.com/api/home`
    )
      .then((response) => response.json())
      .then((data) => setSlides(data.slides));
  }, [market]);

  return (
    <Home data-test="component-app">
      <MarketSelect setMarket={setMarket} />
      <div data-test="component-slides">
        {slides.map((slide, slideIndex) => (
          <Slides slide={slide} slideIndex={slideIndex} />
        ))}
      </div>
    </Home>
  );
}
