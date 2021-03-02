import React from "react";
import { shallow } from "enzyme";
import Widget from "../components/Widget";

const wrapper = shallow(<Widget />);

describe("Widget", () => {
  it("should render the Widget Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
