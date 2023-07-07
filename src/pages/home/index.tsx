import { Link } from 'react-router-dom';
import { CategoryType, ProductType } from '../../types';

type HomeProps = {
  searchValue: string,
  categoryData:CategoryType[],
  products:ProductType[]
  handleFilterByCategory:(categoryId: string) => void,
  handleAddProductToCart:(prod:ProductType)=>void
};

function Home({
  categoryData,
  handleFilterByCategory,
  products,
  searchValue,
  handleAddProductToCart,
}: HomeProps) {
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
        { products.map((prod) => (
          <div
            key={ prod.id }
            data-testid="product"
          >
            <Link
              data-testid="product-detail-link"
              to={ `/product/${prod.id}` }
            >
              <h1>{ prod.title }</h1>
              <h1>
                R$
                {' '}
                { prod.price }
              </h1>
              <img src={ prod.thumbnail } alt={ prod.title } />
            </Link>
            <button
              data-testid="product-add-to-cart"
              onClick={ () => handleAddProductToCart(prod) }
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
