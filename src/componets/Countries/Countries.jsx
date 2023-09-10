import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    // display
    <div>
      <h1>countries: {countries.length}</h1>
      <div>
        <h3>Visited Country: {visitedCountry.length}</h3>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-Container">
        {visitedFlag.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      {/* props section */}
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
