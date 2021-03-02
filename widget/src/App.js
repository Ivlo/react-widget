import React, { useState, useEffect } from "react";
import Title from "./Title";
import { getCreditAgreements } from "./services/creditAgreement";
import baseConfig from "./baseConfig";

const App = () => {
  const [data, setData] = useState(undefined);

  const { creditAgreementUrl } = baseConfig.servicesUrl;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCreditAgreements(creditAgreementUrl);
      setData(result);
    };
    fetchData();
  }, [creditAgreementUrl]);

  console.log(data);

  return (
    <>
      <Title size="small">Hellow world!!</Title>
    </>
  );
};

export default App;
