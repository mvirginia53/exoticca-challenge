import React, { FunctionComponent } from "react";
import SlideItem from "../SliderItem";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { ProductCard } from "../Slides/types";

type SlidesProps = {
  productsCards: ProductCard[];
  slideIndex: number;
};

const Slider: FunctionComponent<SlidesProps> = ({
  productsCards,
  slideIndex,
}): JSX.Element => {
  const slideLeft = (index: number) => {
    const slider = document.getElementById(`slider${index}`);
    if (slider) slider.scrollLeft = slider.scrollLeft - 320;
  };

  const slideRight = (index: number) => {
    const slider = document.getElementById(`slider${index}`);
    if (slider) slider.scrollLeft = slider.scrollLeft + 320;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={() => slideLeft(slideIndex)}
      />

      <div id={`slider${slideIndex}`} className="slider-container">
        {productsCards.map((productCard, index) => (
          <SlideItem productCard={productCard} index={index} />
        ))}
      </div>

      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={() => slideRight(slideIndex)}
      />
    </div>
  );
};

export default Slider;
