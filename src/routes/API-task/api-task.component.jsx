import React, { useState, useEffect } from 'react';
import './api-task.style.css';

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch('https://api.coinbase.com/v2/currencies')
      .then(response => response.json())
      .then(data => setCurrencies(data.data));
  }, []);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Currency code</th>
          <th>Currency Name</th>
          <th>Minimum Size</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map(currency => (
          <tr key={currency.id}>
            <td>{currency.id}</td>
            <td>{currency.name}</td>
            <td>{Number(currency.min_size).toFixed(3)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyList;