import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import MainLayout from "../components/MainLayout";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("MainLayout Component", () => {
  test("Renders MainLayout Component", () => {
    const wrapper = shallow(<MainLayout/>);

    expect(wrapper.exists()).toBe(true);
  });
});