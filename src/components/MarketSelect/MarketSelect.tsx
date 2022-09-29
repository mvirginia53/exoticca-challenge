import React, { FunctionComponent } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import "./MarketSelect.css";

interface Option {
  value: string;
  label: string;
}

interface MarketSelectProps {
  setMarket: (value: string) => void;
}
const options: Option[] = [
  { value: "es", label: "Spain" },
  { value: "uk", label: "United Kingdom" },
];

const SliderContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const SliderLabel = styled.div`
  font-size: 0.9rem;
  font-family: "Red Hat Display", sans-serif;
`;

const MarketSelect: FunctionComponent<MarketSelectProps> = ({
  setMarket,
}): JSX.Element => {
  const handleMarket = (e: any): void => {
    const value = e.target.value;
    setMarket(value);
  };
  return (
    <SliderContainer>
      <SliderLabel>Filter by Market</SliderLabel>
      <Form.Select
        data-test="component-select"
        aria-label="Filter by market"
        style={{ width: "150px" }}
        onChange={(e) => handleMarket(e)}
      >
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </SliderContainer>
  );
};

export default MarketSelect;
