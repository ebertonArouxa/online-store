import { ProductType } from '../../types';

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
      key={ cartProduct.id }
    >
      <button
        data-testid="remove-product"
        onClick={ () => handleDeleteButton(cartProduct) }
      >
        x

      </button>
      <img src={ cartProduct.thumbnail } alt="" />
      <h2
        data-testid="shopping-cart-product-name"
      >
        { cartProduct.title }

      </h2>
      <button
        data-testid="product-decrease-quantity"
        onClick={ () => handleDecreaseButton(cartProduct) }
      >
        -

      </button>
      <h3
        data-testid="shopping-cart-product-quantity"
      >
        Quantidade:
        {' '}
        {cartProduct.quantity}
      </h3>
      <button
        data-testid="product-increase-quantity"
        onClick={ () => handleIncreaseButton(cartProduct) }
      >
        +

      </button>
    </div>
  )));
}

export default CartProducts;
