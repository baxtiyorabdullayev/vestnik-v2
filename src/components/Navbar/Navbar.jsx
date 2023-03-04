import "./Navbar.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";

// images
import logo from "../../assets/Images/logo.png";

// react icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div id="navbar">
      <div id="nav-links">
        <Link to="/" id="nav-link">
          <img src={logo} alt="Turan Internatiol University" />
        </Link>
        <ul id="nav-icons">
          <li id="nav-search">
            <form>
              <input type="search" placeholder="search..." id="serch-input" />
              <button id="search-button">
                <AiOutlineSearch></AiOutlineSearch>
              </button>
            </form>
          </li>
          <li id="issn">
            <a
              href="https://portal.issn.org/resource/ISSN/2181-4104"
              target="_blank"
            >
              ISSN (2181-4104) |
            </a>
          </li>
          <i id="langs">
            {/* <button>EN</button> */}
            {/* <button id="active-lang">RU</button> */}
            {/* <button>UZ</button> */}
          </i>
          <li id="logIn">
            <Link to="/login" className="nav-link login-button px-2 py-1">
              <span className="login-icon">
                <FaUserCircle></FaUserCircle>
              </span>
              Log in
            </Link>
          </li>
        </ul>
      </div>

      <div id="nav-menus">
        <NavLink to="/about" id="nav-link">
          O ЖУРНАЛЕ
        </NavLink>
        <NavLink to="/news" id="nav-link">
          НОВОСТИ
        </NavLink>
        <NavLink to="/sendArticle" id="nav-link">
          Отправить статью
        </NavLink>
        {/* <NavLink to="/currentArticle" id="nav-link">
          ТЕКУЩИЙ ВЫПУСК
        </NavLink>
        <NavLink to="/archive" id="nav-link">
          АРХИВЫ
        </NavLink>
        <NavLink to="/myProfile" id="nav-link">
          МОЙ ПРОФИЛЬ
        </NavLink> */}
      </div>
    </div>
  );
}

export default Navbar;
