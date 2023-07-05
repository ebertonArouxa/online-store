import logo from '../../assets/logo.svg';
import cart from '../../assets/carrinho.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <label htmlFor="search">
        <input id="search" type="text" />
        <button>Pesquisar</button>
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
