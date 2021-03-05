import React, { useState, useEffect } from "react";
import { getCreditAgreements } from "./services/creditAgreement";
import { WidgetContextProvider } from "./WidgetContext";
import baseConfig from "./baseConfig";
import "./app.css";

import Widget from "./components/Widget";

const App = () => {
  const [instalmentFee, setInstalmentFee] = useState("");
  const [data, setData] = useState(undefined);

  const instalmentFeeValue = { instalmentFee, setInstalmentFee };
  const { creditAgreementUrl } = baseConfig.servicesUrl;

  function setInstalmentFeeWhenDataIsLoaded() {
    const initialInstalmentFee = data[0].instalment_fee.string;
    setInstalmentFee(initialInstalmentFee);
  }

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        const result = await getCreditAgreements(creditAgreementUrl);
        setData(result);
      };
      fetchData();
    } else {
      setInstalmentFeeWhenDataIsLoaded();
    }
  }, [data, creditAgreementUrl]);

  return (
    <WidgetContextProvider value={instalmentFeeValue}>
      <Widget financingData={data} />
    </WidgetContextProvider>
  );
};

export default App;
