import React, { useState, useEffect } from "react";
import round from "../utils";

// eslint-disable-next-line react/display-name
const Select = React.memo(({ handleChange, optionsData, optionsText }) => {
  const [optionsSelect, setOptionsSelect] = useState(undefined);
  let ivlo;

  useEffect(() => {
    // manipulate options render in useEffect to avoid warning Cannot flush updates when React is already rendering
    const optionsToRender = optionsData.map((option) => (
      <option key={option.instalment_count} value={option.instalment_fee.value}>
        {`${option.instalment_count} ${optionsText} ${round(option.instalment_total.value)} € mes`}
      </option>
    ));
    setOptionsSelect(optionsToRender);
  }, [optionsData, optionsText]);
  return (
    <select onChange={handleChange} className="select">
      {optionsSelect}
    </select>
  );
});

export default Select;
