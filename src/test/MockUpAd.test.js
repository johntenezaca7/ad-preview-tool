import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import MockUpAd from "../components/MockUpAd";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("MockUpAd Component", () => {
  test("Renders MockUpAd Component", () => {
    const wrapper = shallow(<MockUpAd />);

    expect(wrapper.exists()).toBe(true);
  });
});