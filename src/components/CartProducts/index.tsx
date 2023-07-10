import { ProductType } from '../../types';
import styles from './cartProducts.module.css';

type CartProductProps = {
  cartProducts:ProductType[],
  handleDecreaseButton:(cartProduct:ProductType) => void,
  handleDeleteButton:(cartProduct:ProductType) => void
  handleIncreaseButton:(cartProduct:ProductType) => void

};

function CartProducts({
  cartProducts,
  handleDecreaseButton,
  handleDeleteButton,
  handleIncreaseButton }:CartProductProps) {
  return (cartProducts.map((cartProduct) => (
    <div
      className={ styles.container }
      key={ cartProduct.id }
    >
      <button
        className={ `${styles.btn} ${styles.btnRemove}` }
        data-testid="remove-product"
        onClick={ () => handleDeleteButton(cartProduct) }
      >
        x

      </button>
      <img src={ cartProduct.thumbnail } alt="product" />
      <h2
        className={ styles.title }
        data-testid="shopping-cart-product-name"
      >
        { cartProduct.title }

      </h2>
      <button
        className={ `${styles.btn} ${styles.btnQuantity}` }
        data-testid="product-decrease-quantity"
        onClick={ () => handleDecreaseButton(cartProduct) }
      >
        -

      </button>
      <h3
        data-testid="shopping-cart-product-quantity"
      >
        {cartProduct.quantity}
      </h3>
      <button
        className={ `${styles.btn} ${styles.btnQuantity}` }
        data-testid="product-increase-quantity"
        onClick={ () => handleIncreaseButton(cartProduct) }
      >
        +
      </button>
      <h3>
        <span>R$ </span>
        { Number(cartProduct.price).toFixed(2).replace('.', ',') }
      </h3>
    </div>
  )));
}

export default CartProducts;
