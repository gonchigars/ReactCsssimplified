import React from "react";

function Sidebar({ selectedCity, setSelectedCity, dataType, setDataType }) {
  const cities = ["New York", "London", "Tokyo", "Sydney", "Paris"];
  const dataTypes = ["single-line", "single-object", "multiple-objects"];

  return (
    <aside className="sidebar">
      <h2>Cities</h2>
      <ul>
        {cities.map((city) => (
          <li
            key={city}
            className={city === selectedCity ? "selected" : ""}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </li>
        ))}
      </ul>

      <h2>Data Types</h2>
      <ul>
        {dataTypes.map((type) => (
          <li
            key={type}
            className={type === dataType ? "selected" : ""}
            onClick={() => setDataType(type)}
          >
            {type.replace("-", " ")}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
