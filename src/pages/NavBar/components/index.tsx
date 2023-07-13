import { Link } from 'react-router-dom';
import logo from '../../../assets/brand/navbarlog.jpeg';
import NavBarList from './navbar-list';
import ProductCategory from './productList';

function Navbar() {
  return (
    <>
      <div className="fixed z-50 flex w-full items-center border-b border-gray-300 bg-white px-4 py-2">
        <Link to="/">
          <div className="w-48">
            <img src={logo} alt="yizmed logo" />
          </div>
        </Link>
        <NavBarList />
      </div>
      <ProductCategory />
    </>
  );
}

export default Navbar;
