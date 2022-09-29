import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<App />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("Renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("Slides are displayed", () => {
  const wrapper = setup();
  const slides = findByTestAttr(wrapper, "component-slides");
  expect(slides.length).toBe(1);
});
