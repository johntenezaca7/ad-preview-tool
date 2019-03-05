import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import PlaceHolderItem from "../components/PlaceHolderItem";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("PlaceHolderItem Component", () => {
  test("Renders a PlaceHolderItem Component", () => {
    const wrapper = shallow(<PlaceHolderItem layoutWrapper={'z-shape'} width={500} height={400} />);

    expect(wrapper.exists()).toBe(true);
  });
});