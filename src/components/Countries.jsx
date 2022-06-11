import axios from "axios";
import React, { useEffect, useState } from "react";
import AddCoutry from "./AddCountry";
import SelectDropDown from "./SelectDropDown";

const getCountries = () => {
  return axios({
    url: "https://62a41ce647e6e400638c866a.mockapi.io/countries",
    method: "GET"
  });
};

const addCountry = (name) => {
  return axios({
    url: "https://62a41ce647e6e400638c866a.mockapi.io/countries",
    method: "POST",
    data: {
      name
    }
  });
};

const Countries = ({ setDropDown }) => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    handleGetCountry();
  }, []);

  const handleGetCountry = () => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  };
  setDropDown(countries);
  const handleAddCountry = (name) => {
    addCountry(name).then(() => {
      handleGetCountry();
    });
    setName("");
  };
  return (
    <div>
      <SelectDropDown countries={countries} />

      <div>
        <AddCoutry
          handleAddCountry={handleAddCountry}
          name={name}
          setName={setName}
        />
      </div>
    </div>
  );
};

export default Countries;
