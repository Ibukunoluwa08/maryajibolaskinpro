import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">
            <h1>SkincarePro</h1>
          </div>

          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="icon" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
