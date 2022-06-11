import { Button, Container, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AddCoutry = ({ handleAddCountry, name, setName }) => {
  return (
    <Container bg="blue.100" maxW="60%" mx="auto" mb="10px" p="5">
      <h2>Add Country</h2>
      <Input
        className="add-country-input"
        placeholder="add country"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={() => handleAddCountry(name)}>Add Country</Button>
    </Container>
  );
};

export default AddCoutry;
