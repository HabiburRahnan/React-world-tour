import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const { name, flags, capital, area, population, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "Non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "Black" }}>
        Name: {name.common}
      </h3>
      <img className="img" src={flags.png} alt="" />
      <h3>Capital: {capital}</h3>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedFlag(country.flags.png)}>
        add Flag
      </button>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
      {visited ? " I have visited this country" : "I Want visited"}
    </div>
  );
};

export default Country;
