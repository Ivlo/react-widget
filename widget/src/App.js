import React, { useState, useEffect } from "react";
import { getCreditAgreements } from "./services/creditAgreement";
import baseConfig from "./baseConfig";
import Widget from "./components/Widget";
import { WidgetContextProvider } from "./WidgetContext";

const App = () => {
  const [instalmentFee, setInstalmentFee] = useState("");
  const [data, setData] = useState(undefined);

  const instalmentFeeValue = { instalmentFee, setInstalmentFee };
  const { creditAgreementUrl } = baseConfig.servicesUrl;

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        const result = await getCreditAgreements(creditAgreementUrl);
        setData(result);
      };
      fetchData();
    }
  }, [data, creditAgreementUrl]);

  return (
    <WidgetContextProvider value={instalmentFeeValue}>
      <Widget financingData={data} />
    </WidgetContextProvider>
  );
};

export default App;
