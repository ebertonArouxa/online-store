import { useEffect, useState } from 'react';
import './App.css';
import { getCategories } from './services/api';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchCategory = async () => {
      const categories = await getCategories();
      setData(categories);
    };
    fetchCategory();
  }, []);
  return (
    <div>
      <h1>{ data }</h1>
    </div>
  );
}

export default App;
