import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MarketSelect from "./MarketSelect";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<MarketSelect />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("Select market input exist", () => {
  const wrapper = setup();
  const select = findByTestAttr(wrapper, "component-select");
  expect(select.length).toBe(1);
});
