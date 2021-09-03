import React from "react";
import people from "./Data.js";

const Task1 = () => {
  const attr = [
    "First Name",
    "Last Name",
    "City",
    "State",
    "Country",
    "Age",
    "Gender",
  ];

  return (
    <>
      <table>
        <tbody>
          <tr>
            {attr.map((atr, key) => {
              return <th key={key}>{atr}</th>;
            })}
          </tr>
          {people.map((person, idx) => {
            const { gender, name, location, dob } = person;
            const { first, last } = name;
            const { city, country, state } = location;
            const { age } = dob;

            const personData = [first, last, city, state, country, age, gender];

            return (
              <tr key={idx}>
                {personData.map((atr, key) => {
                  return <td key={key}>{atr}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Task1;
