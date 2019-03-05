import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import TextBlock from "../components/TextBlock";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("TextBlock Component", () => {
  test("Renders a TextBlock Component", () => {
    const wrapper = shallow(<TextBlock />);

    expect(wrapper.exists()).toBe(true);
  });
});