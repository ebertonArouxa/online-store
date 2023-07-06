import { Outlet } from 'react-router-dom';
import Header, { HeaderProps } from '../Header';

function Layout({ handleChange, handleClick, searchValue }: HeaderProps) {
  return (
    <div>
      <Header
        handleChange={ handleChange }
        handleClick={ handleClick }
        searchValue={ searchValue }
      />
      <Outlet />
    </div>
  );
}

export default Layout;
