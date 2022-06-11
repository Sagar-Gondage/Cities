import axios from "axios";
import { useEffect, useState } from "react";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import "./styles.css";

export default function App() {
  const [dropdownCountries, setDropDown] = useState([]);
  return (
    <div className="App">
      <Countries setDropDown={setDropDown} />
      <Cities dropdownCountries={dropdownCountries} />
    </div>
  );
}
