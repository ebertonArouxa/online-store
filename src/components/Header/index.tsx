import { Link } from 'react-router-dom';
import cart from '../../assets/carrinho.svg';
import logo from '../../assets/logo.svg';

type HeaderProps = {
  handleClick: () => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  searchValue: string,
};

function Header({ handleChange, handleClick, searchValue }: HeaderProps) {
  return (
    <header>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          data-testid="query-input"
          value={ searchValue }
          onChange={ handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => handleClick() }
        >
          Pesquisar
        </button>
      </label>
      <img src={ logo } alt="logo" />
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <img src={ cart } alt="cart" />
      </Link>
    </header>
  );
}

export default Header;
