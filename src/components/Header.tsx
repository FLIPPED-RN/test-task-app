import { Link } from "react-router";
import Logo from "../logo.svg";
import "../styles/Header.scss";

export default function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <img src={Logo} alt="logo" className="Header-logo" />
      </Link>
      <div className="Header-links">
        <Link to="/form" className="Header-link">
          Form
        </Link>
        <Link to="/starships" className="Header-link">
          Starships
        </Link>
      </div>
    </header>
  );
}
