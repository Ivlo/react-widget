/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";
import { getCreditAgreements } from "../services/creditAgreement";
import baseConfig from "../baseConfig";

import Select from "./Select";
import Modal from "./Modal";
import Loader from "./Loader";
import FinancingCost from "./FinancingCost";

const Widget = () => {
  const [data, setData] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { creditAgreementUrl } = baseConfig.servicesUrl;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCreditAgreements(creditAgreementUrl);
      setData(result);
    };
    fetchData();
  }, [creditAgreementUrl]);

  function onSelectChange(event) {
    console.log(event.target.value);
  }

  console.log(data);
  return (
    <>
      {data ? (
        <>
          <p>Pagalo en</p>
          <p>
            <a href="#">más info</a>
          </p>
          <Select
            handleChange={onSelectChange}
            optionsData={data}
            optionDefault="Select a element"
            optionsText="cuotas de"
          />
          {isModalVisible && (
            <Modal>
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
