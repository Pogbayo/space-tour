import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="yo">
        <img src="/assets/shared/logo.svg" className="logo" />
      </div>
      <div className="hrLine"></div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/destination" className="link">
              Destination
            </Link>
          </li>
          <li>
            <Link to="/crew" className="link">
              Crew
            </Link>
          </li>
          <li>
            <Link to="/technology" className="link">
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
