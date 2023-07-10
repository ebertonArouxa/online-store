import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ProductType } from '../../types';
import Rating from '../../components/rating';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById({ productId: id });
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
    if (!product) {
      return;
    }
    const productAlreadyInCart = cartProducts
      .find((productItem) => productItem.id === product.id);
    if (productAlreadyInCart) {
      const updateCartProducts = cartProducts
        .map((productItem) => (productItem.id === productAlreadyInCart.id
          ? { ...productItem, quantity: productItem.quantity + 1 } : productItem));
      setCartProducts(updateCartProducts);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCartProducts((productsInCart) => [...productsInCart, newProduct]);
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
          data-testid="product-detail-add-to-cart"
          onClick={ handleAddProductToCart }
        >
          Add to cart
        </button>
        <Rating productId={ product.id } />
      </div>
    )
  );
}

export default Product;
