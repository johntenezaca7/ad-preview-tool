import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Layout from "../components/Layout";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Layout Component", () => {
  test("renders", () => {
    const wrapper = shallow(<Layout/>);

    expect(wrapper.exists()).toBe(true);
  });
});