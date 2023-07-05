import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { getCategories } from '../../services/api';

function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const categories = await getCategories();
      setData(categories);
    };
    fetchCategory();
  }, []);
  return (
    <div>
      <Header />
      {search.length === 0 && (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      )}
    </div>
  );
}

export default Home;
