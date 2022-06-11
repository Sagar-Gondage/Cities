import { Button, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

const AddCities = ({ handleAddCountry, dropdownCountries }) => {
  const [cityData, setCityData] = useState({
    city: "",
    population: "",
    country: ""
  });

  const { city, population } = cityData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddCountry(cityData);
    setCityData({
      ...cityData,
      city: "",
      population: "",
      country: ""
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCityData({
      ...cityData,
      [name]: value
    });
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Stack maxWidth="60%" mx="auto">
          <Input
            placeholder="city"
            size="sm"
            name="city"
            value={city}
            onChange={handleOnChange}
          />
          <Input
            placeholder="population"
            size="sm"
            name="population"
            value={population}
            onChange={handleOnChange}
          />
          <select onChange={handleOnChange} name="country">
            {dropdownCountries.map((country) => (
              <option value={country.name} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <Button colorScheme="teal" size="sm" type="submit">
            Add City
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddCities;
