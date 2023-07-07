import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Cart from './pages/cart';
import Home from './pages/home';
import Product from './pages/product';
import {
  getCategories, getProductsFromTerm, listProductsByCategory,
} from './services/api';
import { CategoryType, ProductType } from './types';

function App() {
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
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            searchValue={ searchValue }
            handleChange={ handleChange }
            handleClick={ handleClick }
          />
        }
      >
        <Route
          index
          element={
            <Home
              categoryData={ categoryData }
              handleFilterByCategory={ handleFilterByCategory }
              products={ products }
              searchValue={ searchValue }
            />
        }
        />
        <Route path="/cart" element={ <Cart /> } />
        <Route
          path="/product/:id"
          element={
            <Product />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
