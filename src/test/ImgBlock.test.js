import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import ImgBlock from "../components/ImgBlock";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("ImgBlock Component", () => {
  test("Renders 600x400 ImgBlock Component", () => {
    const wrapper = shallow(<ImgBlock width={600} height={400}/>);

    expect(wrapper.exists()).toBe(true);
  });
});