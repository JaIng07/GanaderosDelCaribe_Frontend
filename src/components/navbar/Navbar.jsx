import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl mx-5 p-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="h-3.5 mr-3"
            alt="Ganaderos Del Caribe Logo"
          />
          <span className="self-center font-semibold font-montserrat text-white italic">
            Ganaderos Del Caribe
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;