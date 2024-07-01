import React, { useState } from 'react';
import './index.css';

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(15000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  const [investmentData, setInvestmentData] = useState([]);

  const calculateInvestment = () => {
    const data = [];
    let currentInvestmentValue = initialInvestment;
    let totalInterest = 0;
    let investedCapital = initialInvestment;

    for (let year = 1; year <= duration; year++) {
      let interest = (currentInvestmentValue * expectedReturn) / 100;
      totalInterest += interest;
      currentInvestmentValue += interest + annualInvestment;
      investedCapital += annualInvestment;

      data.push({
        year,
        investmentValue: currentInvestmentValue.toFixed(2),
        interest: interest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        investedCapital: investedCapital.toFixed(2),
      });
    }
    setInvestmentData(data);
  };

  return (
    <div className="container">
        <header id='header'>
        <img src="src/assets/itachi.jpg" alt="king of genjutsu" />
        <h1>React Project</h1>
      </header>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Annual Investment</label>
            <input
              type="number"
              value={annualInvestment}
              onChange={(e) => setAnnualInvestment(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Expected Return (%)</label>
            <input
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Duration (Years)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="center">
          <button onClick={calculateInvestment}>Calculate</button>
        </div>
      </div>
      <div id="result">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {investmentData.map((row) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{row.investmentValue}</td>
                <td>{row.interest}</td>
                <td>{row.totalInterest}</td>
                <td>{row.investedCapital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
