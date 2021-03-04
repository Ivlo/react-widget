import React from "react";

// eslint-disable-next-line react/display-name
const Select = React.memo(({ handleChange, optionsData, optionDefault, optionsText }) => {
  return (
    <select onChange={handleChange} className="select">
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
});

export default Select;
