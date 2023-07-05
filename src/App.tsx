import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Route>
    </Routes>
  );
}

export default App;
