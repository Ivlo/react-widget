/* eslint-disable react/button-has-type */
import React, { useState, useContext, useCallback } from "react";
import WidgetContext from "../WidgetContext";
import { setEvent } from "../services/analyticsEvents";

import Select from "./Select";
import Modal from "./Modal";
import Loader from "./Loader";
import FinancingCost from "./FinancingCost";

const Widget = ({ financingData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { setInstalmentFee } = useContext(WidgetContext);

  function sendAnalyticEvent(selectedInstalment) {
    setEvent({
      context: "checkoutWidget",
      type: "simulatorInstalmentChanged",
      selectedInstalment,
    });
  }

  const handleSelectCallback = useCallback((event) => {
    const selectedInstalment = event.target.value;
    if (selectedInstalment) {
      setIsModalVisible(true);
      setInstalmentFee(selectedInstalment);
      sendAnalyticEvent(selectedInstalment);
    }
  }, []);

  function onClickCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      {financingData ? (
        <>
          <p>Pagalo en</p>
          <p>
            <a href="#">más info</a>
          </p>
          <Select
            handleChange={handleSelectCallback}
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
