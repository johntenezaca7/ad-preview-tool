import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Ad from "../components/Ad";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Ad Component", () => {
  test("Renders 600x400 Component", () => {
    const wrapper = shallow(<Ad height={600} width={400}/>);

    expect(wrapper.exists()).toBe(true);
  });
});