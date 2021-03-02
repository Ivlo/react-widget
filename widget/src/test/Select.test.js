import React from "react";
import { shallow } from "enzyme";
import Select from "../components/Select";

const optionsData = ["3", "6"];
const handleChange = jest.fn;
const optionDefault = "option default text";
const optionsText = "options text";

const wrapper = shallow(
  <Select
    handleChange={handleChange}
    optionsData={optionsData}
    optionDefault={optionDefault}
    optionsText={optionsText}
  />,
);

describe("Select", () => {
  it("should render the Select Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
