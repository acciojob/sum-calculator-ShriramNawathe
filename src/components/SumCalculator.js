import React, { useState } from "react";
import "./../styles/App.css";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    const newNumbers = [...numbers, inputValue];
    const newSum = newNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    setNumbers(newNumbers);
    setSum(newSum);
  };

  return (
    <div>
      <label htmlFor="number-input">Enter a number:</label>
      <input type="number" id="number-input" onChange={handleInputChange} />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
