import React from "react";
import { shallow } from "enzyme";
import Modal from "../components/Modal";

const callbackClose = jest.fn();
const children = "Content Modal";

describe("Modal", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Modal onClickClose={callbackClose}>{children}</Modal>);
  });

  it("should render the Modal Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("the content of our Modalcontent element should be our children prop", () => {
    const modalContent = wrapper.find(".modal__content");
    expect(modalContent.text()).toEqual(children);
  });

  it("should be render with a close element", () => {
    const modalAction = wrapper.find(".modal__action");
    expect(modalAction.length).toBe(1);
  });

  it("close action callback should be execute when click on modal__action element", () => {
    const modalAction = wrapper.find(".modal__action");
    modalAction.simulate("click");
    expect(callbackClose).toHaveBeenCalled();
  });
});
