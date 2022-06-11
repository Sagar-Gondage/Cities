import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Input,
  Button,
  FormControl,
  Form
} from "@chakra-ui/react";

import { GrNext, GrPrevious } from "react-icons/gr";
import AddCities from "./AddCities";

const getCities = (page) => {
  return axios({
    url: `https://62a41ce647e6e400638c866a.mockapi.io/cities/?page=${page}&limit=5`,
    method: "GET"
  });
};

const addCities = ({ name, population, country_id, city, country }) => {
  return axios({
    url: "https://62a41ce647e6e400638c866a.mockapi.io/cities",
    method: "POST",
    data: {
      name,
      population,
      country_id,
      city,
      country
    }
  });
};

const Cities = ({ dropdownCountries }) => {
  const [cities, setCities] = useState([]);
  const [page, setPage] = useState(1);
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    return axios({
      url: "https://62a41ce647e6e400638c866a.mockapi.io/countries",
      method: "GET"
    }).then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(() => {
    handleGetCities();
    getCountries();
  }, [page]);

  const handleGetCities = () => {
    getCities(page).then((res) => {
      setCities(res.data);
    });
  };

  const handleAddCountry = (name) => {
    addCities(name).then(() => {
      handleGetCities();
    });
  };

  return (
    <div>
      <AddCities
        handleAddCountry={handleAddCountry}
        countries={countries}
        dropdownCountries={dropdownCountries}
      />
      <TableContainer>
        <Table
          variant="striped"
          colorScheme="teal"
          size="sm"
          maxWidth="60%"
          mx="auto"
        >
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Country</Th>
              <Th>City</Th>
              <Th>Population</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cities.map((city) => (
              <Tr key={city.id}>
                <Td>{city.id}</Td>
                <Td>{city.country}</Td>
                <Td>{city.city}</Td>
                <Td>{city.population}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Button onClick={() => setPage(page - 1)}>
        <GrPrevious />
      </Button>
      <select>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <Button onClick={() => setPage(page + 1)}>
        <GrNext />
      </Button>
    </div>
  );
};

export default Cities;
