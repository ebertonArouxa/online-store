import logo from '../../assets/logo.svg';
import cart from '../../assets/carrinho.svg';

function Header() {
  return (
    <header>
      <label htmlFor="search">
        <input id="search" type="text" />
        <button>Pesquisar</button>
      </label>
      <img src={ logo } alt="logo" />
      <button>
        <img src={ cart } alt="cart" />
      </button>
    </header>
  );
}

export default Header;
