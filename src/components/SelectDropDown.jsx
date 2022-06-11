import React from "react";

const SelectDropDown = ({ countries }) => {
  return (
    <div>
      <select>
        {countries.map((country) => (
          <option value={country.name} key={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectDropDown;
