import "./Navbar.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="menu">
          <li className="item logo">Devfinder</li>
          <li className="item">
            DARK
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
