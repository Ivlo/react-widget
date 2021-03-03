import React from "react";
import { shallow } from "enzyme";
import FinancingCost from "../components/FinancingCost";

const wrapper = shallow(<FinancingCost />);

describe("FinancingCost", () => {
  it("should render the FinancingCost Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
