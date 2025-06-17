import { useState } from "react";
import { Link } from "react-router";
import Logo from "../logo.svg";
import "../styles/Header.scss"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="Header">
      <Link to="/">
        <img src={Logo} alt="logo" className="Header-logo" />
      </Link>

      <div className="Header-burger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`Header-links ${isOpen ? "open" : ""}`}>
        <Link to="/form" className="Header-link" onClick={() => setIsOpen(false)}>
          Form
        </Link>
        <Link to="/starships" className="Header-link" onClick={() => setIsOpen(false)}>
          Starships
        </Link>
      </div>
    </header>
  );
}
