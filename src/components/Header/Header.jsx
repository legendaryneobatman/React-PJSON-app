import React from 'react';
import cl from "./header.module.css"

const Header = () => {
  return (
      <div className={' ' + cl.header}>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="px-2 fs-4">Simple React App</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Posts</a></li>
          </ul>
        </header>
      </div>
  );
};

export default Header;
