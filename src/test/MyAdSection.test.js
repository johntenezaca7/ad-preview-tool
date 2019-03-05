import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import MyAdSection from "../containers/MyAdSection";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("MyAdSection Component", () => {
  test("Renders MyAdSection Component", () => {
    const wrapper = shallow(<MyAdSection />);

    expect(wrapper.exists()).toBe(true);
  });
});