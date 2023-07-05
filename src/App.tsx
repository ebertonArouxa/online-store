import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories } from './services/api';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchCategory = async() => {
      const categories = await getCategories();
      setData(categories);
    };
  }, []);
  return (
    <div></div>
  );
}

export default App;
