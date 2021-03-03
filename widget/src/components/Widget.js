/* eslint-disable react/button-has-type */
import React, { useState, useContext } from "react";
import WidgetContext from "../WidgetContext";
import Select from "./Select";
import Modal from "./Modal";
import Loader from "./Loader";
import FinancingCost from "./FinancingCost";

const Widget = ({ financingData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { setInstalmentFee } = useContext(WidgetContext);

  function onSelectChange(event) {
    setIsModalVisible(true);
    setInstalmentFee(event.target.value);
  }

  function onClickCloseModal() {
    setIsModalVisible(false);
  }

  console.log(financingData);
  return (
    <>
      {financingData ? (
        <>
          <p>Pagalo en</p>
          <p>
            <a href="#">más info</a>
          </p>
          <Select
            handleChange={onSelectChange}
            optionsData={financingData}
            optionDefault="Select a element"
            optionsText="cuotas de"
          />
          {isModalVisible && (
            <Modal onClickClose={onClickCloseModal}>
              <FinancingCost />
            </Modal>
          )}
        </>
      ) : (
        <Loader text="Loading..." />
      )}
    </>
  );
};

export default Widget;
