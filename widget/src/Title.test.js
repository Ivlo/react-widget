import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

const title = "Test Title";
const wrapper = shallow(<Title size={"ivlo"}>{title}</Title>);

describe("Title", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the Titles children", () => {
    expect(wrapper.find("h1").text()).toEqual(title);
  });
  it("renders a title in size of 'small' with text in it", () => {
    // console.log(wrapper.props());
    console.log(wrapper.debug());
    expect(wrapper.props().size).toEqual("ivlo");
  });
});
