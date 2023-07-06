import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import {
  getCategories,
  getProductsFromTerm, listProductsByCategory,
} from '../../services/api';
import { CategoryType, ProductType } from '../../types';

function Home() {
  const [categoryData, setcategoryData] = useState<CategoryType[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleClick = async () => {
    const productsByCategory = await getProductsFromTerm(searchValue);
    const filteredProducts = productsByCategory.results;
    setProducts(filteredProducts);
  };

  const handleFilterByCategory = async (categoryId: string) => {
    const categories = await listProductsByCategory(categoryId);
    const { results } = categories;
    setProducts(results);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const categories = await getCategories();
      setcategoryData(categories);
    };
    fetchCategory();
  }, [categoryData]);

  return (
    <div>
      <Header
        searchValue={ searchValue }
        handleChange={ handleChange }
        handleClick={ handleClick }
      />
      {searchValue.length === 0 && (
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
              onClick={ () => handleFilterByCategory(category.id) }
            >
              { category.name }
            </button>))}
      </aside>
      <section>
        {products.map((product) => (
          <div key={ product.id } data-testid="product">
            <h1>{ product.title }</h1>
            <h1>{ product.price }</h1>
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
