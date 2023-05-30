import { Link, useLocation } from "react-router-dom";
import "./style.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="limit-width header-logo-nav">
        <div className="div-logo-header">
          <Link to="/">
            <img
              className="logo-header"
              src={logo}
              alt="Logo Doe Agasalho"
              title="Logo Doe Agasalho"
            />
          </Link>
        </div>

        <nav>
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
          </label>
          <ul type="none" className="link-header menu">
            <li>
              <Link
                to="/"
                id="link-invisible"
                className={location.pathname === "/" ? "active-route" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                id="link-invisible"
                className={location.pathname === "/about" ? "active-route" : ""}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/collectionpoint"
                id="link-invisible"
                className={
                  location.pathname === "/collectionpoint" ? "active-route" : ""
                }
              >
                Pontos de Coleta
              </Link>
            </li>
            <li className="btn-header">
            <Link
                to="/howtodonate"
                className={
                  location.pathname === "/howtodonate" ? "active-route-btn" : ""
                }
              >
                Saiba como doar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
