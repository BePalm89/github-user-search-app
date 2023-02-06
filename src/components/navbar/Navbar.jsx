import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styled from "@emotion/styled";

const Menu = styled.ul({
  listStyleType: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "18px",
  color: "var(--colors-primary)",
});

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <Menu>
          <li className="item logo">Devfinder</li>
          <li className="item">
            <ThemeSwitcher />
          </li>
        </Menu>
      </nav>
    </div>
  );
};

export default Navbar;
