import { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
import { CategoryType } from '../../types';

function Home() {
  const [categoryData, setcategoryData] = useState<CategoryType[]>([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const categories = await getCategories();
      setcategoryData(categories);
      console.log(categoryData);
    };
    fetchCategory();
  }, []);

  return (
    <div>
      {search.length === 0 && (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      )}
      <aside>
        { categoryData
          .map((category) => (
            <button
              data-testid="category"
              key={ category.id }
            >
              { category.name }
            </button>))}
      </aside>
    </div>
  );
}

export default Home;
