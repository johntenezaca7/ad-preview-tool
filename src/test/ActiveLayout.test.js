import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import ActiveLayout from "../components/ActiveLayout";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Ad Component", () => {

  test("Renders Single-Column Layout", () => {
    const wrapper = shallow(<ActiveLayout layoutType={"single-column"}/>);

    expect(wrapper.exists()).toBe(true);
  });

  test("Renders Grid-of-Cards Layout", () => {
    const wrapper = shallow(<ActiveLayout layoutType={"grid-of-cards"}/>);
    
    expect(wrapper.exists()).toBe(true);
  });

  test("Renders Boxes Layout", () => {
    const wrapper = shallow(<ActiveLayout layoutType={"boxes"}/>);
    
    expect(wrapper.exists()).toBe(true);
  });

  test("Renders F-Shape Layout", () => {
    const wrapper = shallow(<ActiveLayout layoutType={"f-shape"}/>);
    
    expect(wrapper.exists()).toBe(true);
  });

  test("Renders Z-Shape Layout", () => {
    const wrapper = shallow(<ActiveLayout layoutType={"z-shape"}/>);
    
    expect(wrapper.exists()).toBe(true);
  });

});