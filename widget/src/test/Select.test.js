import React from "react";
import { mount } from "enzyme";
import Select from "../components/Select";

const optionsData = [
  {
    instalment_count: "3",
    instalment_fee: {
      value: "500",
    },
    instalment_total: {
      value: "5500",
    },
  },
  {
    instalment_count: "6",
    instalment_fee: {
      value: "500",
    },
    instalment_total: {
      value: "3000",
    },
  },
];
const handleChange = jest.fn();
const optionDefaultText = "option default text";
const optionsText = "cuotas de";
const firstOptionText = `3 ${optionsText} 55,00 € mes`;
const secondOptionText = `6 ${optionsText} 30,00 € mes`;

describe("Select", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Select
        handleChange={handleChange}
        optionsData={optionsData}
        optionDefault={optionDefaultText}
        optionsText={optionsText}
      />,
    );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should render with two options inside", () => {
    const options = wrapper.find("option");
    expect(options.length).toEqual(2);
  });
  it("when it change the handleChange prop should be executed", () => {
    wrapper.simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });
  it("the text of the first option should be equal to firstOptionText", () => {
    const firstOption = wrapper.find("option").at(0);
    expect(firstOption.text()).toEqual(firstOptionText);
  });

  it("the text of the second option should be equal to secondOptionText", () => {
    const firstOption = wrapper.find("option").at(1);
    expect(firstOption.text()).toEqual(secondOptionText);
  });
});
