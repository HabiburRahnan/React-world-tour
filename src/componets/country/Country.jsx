import "./country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, capital, area, population } = country;

  return (
    <div className="country">
      <h1>Name: {name.common}</h1>
      <img src={flags.png} alt="" />
      <h3>Capital: {capital}</h3>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
