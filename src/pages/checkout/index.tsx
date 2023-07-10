import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../types';

function Checkout() {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);
  const [data, setData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: '',
  });
  const [isInvalid, setIsInvalid] = useState<boolean>(true);

  const { name, email, cpf, phone, cep, address, payment } = data;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setData(((prevData) => ({
      ...prevData,
      [event.target.name]: value,
    })));
  };

  useEffect(() => {
    const productsFromStorage = localStorage.getItem('products');
    if (productsFromStorage) {
      const products = JSON.parse(productsFromStorage);
      setCartProducts(products);
    }
  }, []);

  const handleClick = () => {
    if (name && email && cpf && phone && cep && address && payment) {
      setCartProducts([]);
      localStorage.setItem('products', JSON.stringify([]));
      navigate('/cart');
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <div>
      {
      cartProducts.map((cartProduct) => {
        return (
          <div
            key={ cartProduct.id }
          >
            <h2>
              { cartProduct.title }
            </h2>
            <img src={ cartProduct.thumbnail } alt="product" />
            <h2>
              R$
              {' '}
              { cartProduct.price }
            </h2>
            <h2>
              Quantidade:
              {' '}
              { cartProduct.quantity }
            </h2>
          </div>
        );
      })
      }
      <form>
        <label
          htmlFor="name"
        >
          Nome:
          <input
            data-testid="checkout-fullname"
            type="text"
            id="name"
            name="name"
            value={ name }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="email"
        >
          Email:
          <input
            data-testid="checkout-email"
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="cpf"
        >
          CPF:
          <input
            data-testid="checkout-cpf"
            type="text"
            id="cpf"
            name="cpf"
            value={ cpf }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="phone"
        >
          Telefone:
          <input
            data-testid="checkout-phone"
            type="text"
            id="phone"
            name="phone"
            value={ phone }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="cep"
        >
          CEP:
          <input
            data-testid="checkout-cep"
            type="text"
            id="cep"
            name="cep"
            value={ cep }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="address"
        >
          Endereço:
          <input
            data-testid="checkout-address"
            type="text"
            id="address"
            name="address"
            value={ address }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="ticket"
        >
          Boleto:
          <input
            data-testid="ticket-payment"
            type="radio"
            name="payment"
            id="ticket"
            value="ticket"
            checked={ payment === 'ticket' }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="visa"
        >
          Visa:
          <input
            data-testid="visa-payment"
            type="radio"
            name="payment"
            id="visa"
            value="visa"
            checked={ payment === 'visa' }
            onChange={ handleChange }

          />
        </label>
        <label
          htmlFor="master"
        >
          Master:
          <input
            data-testid="master-payment"
            type="radio"
            name="payment"
            id="master"
            value="master"
            checked={ payment === 'master' }
            onChange={ handleChange }

          />
        </label>
        <label
          htmlFor="elo"
        >
          Elo:
          <input
            data-testid="elo-payment"
            type="radio"
            name="payment"
            id="elo"
            value="elo"
            checked={ payment === 'elo' }
            onChange={ handleChange }

          />
        </label>
        <button
          type="button"
          data-testid="checkout-btn"
          onClick={ handleClick }
        >
          Finalizar compra
        </button>
      </form>
      {
        !isInvalid && (
          <h3
            data-testid="error-msg"
          >
            Campos inválidos

          </h3>
        )
      }
    </div>
  );
}

export default Checkout;
