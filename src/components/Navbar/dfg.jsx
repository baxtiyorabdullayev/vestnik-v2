import "./Navbar.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// images
import logo from "../../assets/Images/logo.png";

// react icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          <img src={logo} alt="Turan Internatiol University" />
        </NavLink>
        <ul className="nav-icons">
          <li className="nav-search">
            <form>
              <input
                type="search"
                placeholder="search..."
                className="serch-input"
              />
              <button className="search-button">
                <AiOutlineSearch></AiOutlineSearch>
              </button>
            </form>
          </li>
          <li className="issn">
            <a href="#">ISSN (0000-0000) | </a>
          </li>
          <i className="langs">
            {/* <button>EN</button> */}
            {/* <button className="active-lang">RU</button> */}
            {/* <button>UZ</button> */}
          </i>
          <li className="logIn">
            <NavLink to="/login">
              <FaUserCircle></FaUserCircle>Log in
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-menus">
        <NavLink to="/about" className="nav-link">
          O ЖУРНАЛЕ
        </NavLink>
        <NavLink to="/news" className="nav-link">
          НОВОСТИ
        </NavLink>
        <NavLink to="/sendArticle" className="nav-link">
          Отправить статью
        </NavLink>
        <NavLink to="/currentArticle" className="nav-link">
          ТЕКУЩИЙ ВЫПУСК
        </NavLink>
        <NavLink to="/archive" className="nav-link">
          АРХИВЫ
        </NavLink>
        <NavLink to="/myProfile" className="nav-link">
          мой профиль
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
