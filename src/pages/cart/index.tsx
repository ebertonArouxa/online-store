import { useEffect, useState } from 'react';
import { CartProduct, ProductType } from '../../types';

function Cart() {
  const [cartProducts, setCartProducts] = useState<{ [key: string]: CartProduct }>({});

  useEffect(() => {
    const productsFromStorage = localStorage.getItem('products');
    if (productsFromStorage) {
      const products = JSON.parse(productsFromStorage);
      refatoreCartItems(products);
    }
  }, []);

  const refatoreCartItems = (products: ProductType[]) => {
    const countItems = products.reduce((acc, product) => {
      const { title, price } = product;
      acc[title] = acc[title] || { quantity: 0, price: 0 };
      acc[title].quantity++;
      acc[title].price += Number(price);
      return acc;
    }, {} as { [key: string]: CartProduct });
    setCartProducts(countItems);
  };
  return (
    Object.keys(cartProducts).length === 0
      ? (
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      ) : (
        Object.keys(cartProducts).map((itemName) => {
          const { quantity, price } = cartProducts[itemName];
          return (
            <div
              key={ itemName }
            >
              <h2
                data-testid="shopping-cart-product-name"
              >
                { itemName }

              </h2>
              <h3>
                Preço:
                R$
                {' '}
                { price }
              </h3>
              <h3
                data-testid="shopping-cart-product-quantity"
              >
                {quantity }
              </h3>
            </div>
          );
        })
      )

  );
}

export default Cart;
