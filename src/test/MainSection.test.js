import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { TestMainSection } from "../containers/MainSection";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("MainSection Component", () => {
  test("Renders MainSection Component", () => {
    const wrapper = shallow(<TestMainSection />);

    expect(wrapper.exists()).toBe(true);
  });
});