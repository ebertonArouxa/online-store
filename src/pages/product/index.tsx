import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ProductType } from '../../types';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById({ productId: id });
      setProduct(productData);
    };
    fetchProduct();
  }, []);

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

        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Add to cart
        </Link>
      </div>
    )
  );
}

export default Product;
