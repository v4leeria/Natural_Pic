import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav">
        <Link to="/" className="link">
          Home
        </Link>
        |
        <Link to="/favoritos" className="link">
          Favoritos
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
