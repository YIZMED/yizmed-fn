import logo from '../../../assets/brand/navbarlog.jpeg';
import NavBarList from './navbar-list';

function Navbar() {
  return (
    <div className="fixed z-50 flex w-full items-center border-b border-gray-300 bg-white px-4 py-2">
      <div className="w-48">
        <img src={logo} alt="yizmed logo" />
      </div>
      <NavBarList />
    </div>
  );
}

export default Navbar;
