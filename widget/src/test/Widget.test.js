import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Widget from "../components/Widget";
import Modal from "../components/Modal";
import MemoizedSelect from "../components/Select";

describe("Widget", () => {
  describe("without financing informtion data", () => {
    const wrapper = shallow(<Widget />);
    it("should render the Widget Component correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("with financing information data", () => {
    let wrapper;
    const financingData = true;
    beforeEach(() => {
      ReactDOM.createPortal = jest.fn((element) => {
        return element;
      });
      wrapper = shallow(<Widget financingData={financingData} />);
    });

    it("should render the Widget Component correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("when render the component the Modal component not should be rendered", () => {
      expect(wrapper.find(Modal).length).toBe(0);
    });

    it("when click in moreInfoAction the Modal component should be rendered", () => {
      const moreInfoAction = wrapper.find("a");
      moreInfoAction.simulate("click");
      expect(wrapper.find(Modal).length).toBe(1);
    });

    it("select component should have a prop optionsData whose value should be the financingData defined before", () => {
      const Select = wrapper.find(MemoizedSelect);
      expect(Select.prop("optionsData")).toEqual(financingData);
    });
  });
});
