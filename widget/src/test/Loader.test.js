import React from "react";
import { shallow } from "enzyme";
import Loader from "../components/Loader";

const textLoader = "Loading...";
const wrapper = shallow(<Loader text={textLoader} />);

describe("Loader", () => {
  it("should render the Loader Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render with a paragraph equal to textLoader", () => {
    expect(wrapper.find("p").text()).toEqual(textLoader);
  });
});
