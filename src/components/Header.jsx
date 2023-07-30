import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const search = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setQuery("");
      }, 1000);
    }
  };
  const handleSearchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setQuery("");
      }, 1000);
    }
  };

  //stopping scroll when the navbar is open.....
  if (nav === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <button onClick={() => setNav(!nav)}>
          <RxHamburgerMenu />
        </button>
        <h2>MovieVerse</h2>
      </div>
      <div className="menu_container">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/movies"}>Movies</Link>
          </li>
          <li>
            <Link to={"/tvshows"}>TV Shows</Link>
          </li>
        </ul>
      </div>
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleSearchQuery}
          value={query}
        />
        <button onClick={search}>
          <Link>
            <AiOutlineSearch />
          </Link>
        </button>
      </div>

      {/* ********* mobile-nav ********* */}
      <div className={`mobile_navbar ${nav ? "mobile_nav_opens" : " "}`}>
        <div className="hamburger_menu">
          <h2>MovieVerse</h2>
          <button onClick={() => setNav(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="mobile_nav_menu">
          <ul>
            <li onClick={()=>setNav(false)}>
              <Link to={"/"}>Home</Link>
            </li>
            <li onClick={()=>setNav(false)}>
              <Link to={"/movies"}>Movies</Link>
            </li>
            <li onClick={()=>setNav(false)}>
              <Link to={"/tvshows"}>TV Shows</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
