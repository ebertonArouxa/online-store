import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductType } from '../../types';
import { getProductById } from '../../services/api';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById({ productId: id });
      console.log(productData);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const productsFromStorage = localStorage.getItem('products');
    if (productsFromStorage) {
      const products = JSON.parse(productsFromStorage);
      setCartProducts(products);
    }
  }, []);

  const handleAddProductToCart = () => {
    if (product) {
      setCartProducts((prev) => [...prev, product]);
    }
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    product && (
      <div>
        <h2
          data-testid="product-detail-name"
        >
          { product.title }

        </h2>
        <h3
          data-testid="product-detail-price"
        >
          {' '}
          R$
          {' '}
          { product.price }
        </h3>
        <img
          data-testid="product-detail-image"
          src={ product.thumbnail }
          alt={ product.title }
        />
        <button
          data-testid="product-add-to-cart"
          onClick={ handleAddProductToCart }
        >
          Add to cart
        </button>
      </div>
    )
  );
}

export default Product;
