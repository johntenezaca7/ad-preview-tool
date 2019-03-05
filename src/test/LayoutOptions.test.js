import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { TestLayoutOptions } from "../containers/LayoutOptions";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("LayoutOptions Component", () => {
  test("Renders LayoutOptions Component", () => {
    const layoutTypes =  ["Single Column", "Grid of Cards", "Boxes", "F-Shape", "Z-Shape"];

    const wrapper = shallow(<TestLayoutOptions types={layoutTypes} />);

    expect(wrapper.exists()).toBe(true);
  });
});