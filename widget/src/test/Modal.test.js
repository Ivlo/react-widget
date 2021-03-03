import React from "react";
import { shallow } from "enzyme";
import Modal from "../components/Modal";

const children = "children component";
const wrapper = shallow(<Modal>{children}</Modal>);

describe("Modal", () => {
  it("should render the Modal Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
