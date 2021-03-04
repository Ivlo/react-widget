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
  const { instalmentFee, setInstalmentFee } = useContext(WidgetContext);

  function sendAnalyticEvent(selectedInstalment) {
    setEvent({
      context: "checkoutWidget",
      type: "simulatorInstalmentChanged",
      selectedInstalment,
    });
  }

  const handleSelectCallback = useCallback(({ target: { value } }) => {
    if (value) {
      setInstalmentFee(value);
      sendAnalyticEvent(value);
    }
  }, []);

  function onClicOpenModal() {
    setIsModalVisible(true);
  }

  function onClickCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      {financingData ? (
        <>
          <div className="widget__heading">
            <p>Pagalo en</p>
            {instalmentFee && (
              <p>
                <a href="#" onClick={onClicOpenModal}>
                  más info
                </a>
              </p>
            )}
          </div>

          <Select
            handleChange={handleSelectCallback}
            optionsData={financingData}
            optionDefault="Seleccione un metodo de financión"
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
