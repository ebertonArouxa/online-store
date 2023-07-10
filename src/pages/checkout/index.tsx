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
  });
  const [isInvalid, setIsInvalid] = useState<boolean>(true);

  const { name, email, cpf, phone, cep, address } = data;

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
  }, [cartProducts]);

  const handleClick = () => {
    if (name && email && cpf && phone && cep && address) {
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
          data-testid="checkout-fullname"
          htmlFor="name"
        >
          Nome:
          <input
            type="text"
            id="name"
            name="name"
            value={ name }
            onChange={ handleChange }
          />
        </label>
        <label
          data-testid="checkout-email"
          htmlFor="email"
        >
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label
          data-testid="checkout-cpf"
          htmlFor="cpf"
        >
          CPF:
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={ cpf }
            onChange={ handleChange }
          />
        </label>
        <label
          data-testid="checkout-phone"
          htmlFor="phone"
        >
          Telefone:
          <input
            type="text"
            id="phone"
            name="phone"
            value={ phone }
            onChange={ handleChange }
          />
        </label>
        <label
          data-testid="checkout-cep"
          htmlFor="cep"
        >
          CEP:
          <input
            type="text"
            id="cep"
            name="cep"
            value={ cep }
            onChange={ handleChange }
          />
        </label>
        <label
          data-testid="checkout-address"
          htmlFor="address"
        >
          Endereço:
          <input
            type="text"
            id="address"
            name="address"
            value={ address }
            onChange={ handleChange }
          />
        </label>
        <label
          data-testid="ticket-payment"
          htmlFor="ticket"
        >
          Boleto:
          <input type="radio" name="payment" id="ticket" />
        </label>
        <label
          data-testid="visa-payment"
          htmlFor="visa"

        >
          Visa:
          <input type="radio" name="payment" id="visa" checked />
        </label>
        <label
          data-testid="master-payment"
          htmlFor="master"
        >
          Master:
          <input type="radio" name="payment" id="master" />
        </label>
        <label
          data-testid="elo-payment"
          htmlFor="elo"
        >
          Elo:
          <input type="radio" name="payment" id="elo" />
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
