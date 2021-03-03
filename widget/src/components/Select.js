import React from "react";

const Select = ({ handleChange, optionsData, optionDefault, optionsText }) => {
  return (
    <select onChange={handleChange}>
      <>
        <option value="">{optionDefault}</option>
        {optionsData.map((option) => (
          <option key={option.instalment_count} value={option.instalment_count}>
            {`${option.instalment_count} ${optionsText} ${option.instalment_total.string} mes`}
          </option>
        ))}
      </>
    </select>
  );
};

export default Select;
