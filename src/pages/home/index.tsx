import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CategoryType, ProductType } from '../../types';

type HomeProps = {
  searchValue: string,
  categoryData:CategoryType[],
  products:ProductType[]
  handleFilterByCategory:(categoryId: string) => void,
};

function Home({
  categoryData,
  handleFilterByCategory,
  products,
  searchValue }: HomeProps) {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const productsFromStorage = localStorage.getItem('products');
    if (productsFromStorage) {
      const productsLocate = JSON.parse(productsFromStorage);
      setCartProducts(productsLocate);
    }
  }, []);

  const handleAddProductToCart = (product: ProductType) => {
    setCartProducts((prev) => [...prev, product]);
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <div>
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
          <div
            key={ product.id }
            data-testid="product"
          >
            <Link
              data-testid="product-detail-link"
              to={ `/product/${product.id}` }
            >
              <h1>{ product.title }</h1>
              <h1>
                R$
                {' '}
                { product.price }
              </h1>
              <img src={ product.thumbnail } alt={ product.title } />
            </Link>
            <button
              data-testid="product-add-to-cart"
              onClick={ () => handleAddProductToCart(product) }
            >
              Add to cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
