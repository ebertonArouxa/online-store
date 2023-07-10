import { Link } from 'react-router-dom';
import cart from '../../assets/carrinho.svg';
import logo from '../../assets/logo.svg';
import styles from './header.module.css';
import searchIcon from '../../assets/search.svg';

export type HeaderProps = {
  handleClick: () => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  searchValue: string,
};

function Header({ handleChange, handleClick, searchValue }: HeaderProps) {
  return (
    <header className={ styles.header }>
      <label
        className={ styles.search }
        htmlFor="search"
      >
        <input
          className={ styles.searchInput }
          id="search"
          type="text"
          data-testid="query-input"
          placeholder="Digite o que você busca"
          value={ searchValue }
          onChange={ handleChange }
        />
        <button
          className={ styles.searchButton }
          data-testid="query-button"
          type="button"
          onClick={ () => handleClick() }
        >
          <img
            src={ searchIcon }
            alt="search icon"
          />
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
