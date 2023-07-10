import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartProducts from '../../components/CartProducts';
import { ProductType } from '../../types';

function Cart() {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const productsFromStorage = localStorage.getItem('products');
    if (productsFromStorage) {
      const products = JSON.parse(productsFromStorage);
      setCartProducts(products);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const handleIncreaseButton = (cartProduct:ProductType) => {
    const productToUpdate = cartProducts.find((prod) => prod.id === cartProduct.id);
    if (productToUpdate) {
      const updateCartProducts = cartProducts
        .map((productItem) => (productItem.id === productToUpdate.id
          ? { ...productItem, quantity: productItem.quantity + 1 } : productItem));
      setCartProducts(updateCartProducts);
    }
  };

  const handleDecreaseButton = (cartProduct:ProductType) => {
    const productToUpdate = cartProducts.find((prod) => prod.id === cartProduct.id);
    if (productToUpdate && cartProduct.quantity > 1) {
      const updateCartProducts = cartProducts
        .map((productItem) => (productItem.id === productToUpdate.id
          ? { ...productItem, quantity: productItem.quantity - 1 } : productItem));
      setCartProducts(updateCartProducts);
    }
  };

  const handleDeleteButton = (cartProduct:ProductType) => {
    const deleteProduct = cartProducts.filter((prod) => prod.id !== cartProduct.id);
    setCartProducts(deleteProduct);
  };
  if (cartProducts.length === 0) {
    return (
      <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
    );
  }

  return (
    <div>
      <CartProducts
        cartProducts={ cartProducts }
        handleDecreaseButton={ handleDecreaseButton }
        handleDeleteButton={ handleDeleteButton }
        handleIncreaseButton={ handleIncreaseButton }
      />
      <Link
        to="/checkout"
        data-testid="checkout-products"
      >
        Checkout
      </Link>
    </div>
  );
}

export default Cart;
