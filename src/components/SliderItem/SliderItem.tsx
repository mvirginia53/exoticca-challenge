import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ProductCard } from "../Slides/types";

type SliderItemProps = {
  productCard: ProductCard;
  index: number;
};

const SliderItemContainer = styled.div`
  position: relative;
  display: inline-Block;
  width: 300px;
  height: 310px;
  background: white;
  border-radius: 8px;
  margin: 0 5px;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%);
  margin: 0 12px 12px;
`;

const CardTitleContainer = styled.div`
  position: absolute;
  left: 0px;
  padding: 16px;
  bottom: 80px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
  width: 90%;
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  white-space: initial;
  margin-left: 0px;
`;

const CardDays = styled.h4`
  font-size: 1rem;
  color: #fff;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 400;
  margin: 0px;
`;

const CardDescription = styled.div`
  padding: 16px;
`;
const CardDescriptionText = styled.div`
  font-family: "Red Hat Display", sans-serif;
  font-size: 0.9rem;
  color: #2a2a2a;
`;
const CardPrice = styled.div`
  display: flex;
  align-items: baseline;
`;

const CardDescriptionPrice = styled.div`
  font-family: "Red Hat Display", sans-serif;
  font-size: 0.7rem;
  color: #2a2a2a;
  text-decoration: line-through;
  margin: 0 10px;
  font-weight: bold;
`;
const CardDescriptionPriceUpdate = styled.div`
  font-family: "Red Hat Display", sans-serif;
  font-size: 1.3rem;
  color: #2a2a2a;
  font-weight: bold;
`;

const SliderItem: FunctionComponent<SliderItemProps> = ({
  productCard,
  index,
}): JSX.Element => {
  return (
    <SliderItemContainer key={index}>
      <div
        className="slider-card-image"
        style={{
          backgroundImage: `url(${productCard.images[0].desktop})`,
        }}
      ></div>
      <CardTitleContainer>
        <CardTitle> {productCard.destination}</CardTitle>
        <CardDays>{productCard.days} days</CardDays>
      </CardTitleContainer>
      <CardDescription>
        <CardDescriptionText>{productCard.title}</CardDescriptionText>
        <CardPrice>
          From
          <CardDescriptionPrice>
            {productCard.priceDetail.oldPriceBeautify}
          </CardDescriptionPrice>
          <CardDescriptionPriceUpdate>
            {productCard.priceDetail.fromPriceBeautify}
          </CardDescriptionPriceUpdate>
        </CardPrice>
      </CardDescription>
    </SliderItemContainer>
  );
};

export default SliderItem;
