import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { TestGenericBtn } from "../containers/GenericBtn";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("GenericBtn Component", () => {
  test("Render with Single-Column Text", () => {
    const wrapper = shallow(<TestGenericBtn layoutType={"single-column"} />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Render with Grid-Of-Cards Text", () => {
    const wrapper = shallow(<TestGenericBtn layoutType={"grid-of-cards"} />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Render with Boxes Text", () => {
    const wrapper = shallow(<TestGenericBtn layoutType={"boxes"} />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Render with F-Shape Text", () => {
    const wrapper = shallow(<TestGenericBtn layoutType={"f-shape"} />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Render with Z-Shape Text", () => {
    const wrapper = shallow(<TestGenericBtn layoutType={"z-shape"} />);

    expect(wrapper.exists()).toBe(true);
  });
});